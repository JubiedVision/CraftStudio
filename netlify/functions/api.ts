import express, { type Request, Response, NextFunction } from "express";
import { Handler } from "@netlify/functions";
import serverless from "serverless-http";
import { storage } from "../../server/storage";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      console.log(logLine);
    }
  });

  next();
});

// Contact form API endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, project, budget, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required' });
    }
    
    // Store contact form submission
    const contactRequest = await storage.createContactRequest({
      name,
      email,
      project,
      budget,
      message,
      createdAt: new Date()
    });
    
    return res.status(200).json({ 
      message: 'Message sent successfully',
      id: contactRequest.id
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return res.status(500).json({ message: 'Something went wrong, please try again' });
  }
});

// Error handling middleware
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(status).json({ message });
});

// Create serverless handler
const serverlessHandler = serverless(app);

export const handler: Handler = async (event, context) => {
  // For local dev support
  if (process.env.NETLIFY_DEV) {
    context.callbackWaitsForEmptyEventLoop = false;
  }
  
  return serverlessHandler(event, context);
}; 
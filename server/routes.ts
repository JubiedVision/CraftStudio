import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
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

  // For non-Netlify environments
  if (typeof window === 'undefined' && !process.env.NETLIFY) {
    const httpServer = createServer(app);
    return httpServer;
  }

  // For Netlify, we just need to register the routes
  return createServer(app);
}

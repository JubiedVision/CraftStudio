import { Link } from "wouter";

export default function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-neutral-900">
      <div className="max-w-md w-full p-8 bg-white dark:bg-neutral-800 rounded-lg shadow-md text-center">
        <div className="mb-6">
          <svg 
            className="mx-auto h-16 w-16 text-green-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        </div>
        
        <h1 className="text-2xl font-serif font-semibold text-[#1A2456] dark:text-white mb-4">
          Message Sent Successfully!
        </h1>
        
        <p className="text-neutral-600 dark:text-neutral-300 mb-8">
          Thank you for reaching out. We've received your message and will get back to you as soon as possible.
        </p>
        
        <Link href="/">
          <a className="inline-block bg-[#1A2456] hover:bg-[#2A3466] text-white font-medium py-3 px-6 rounded-md transition-colors">
            Back to Home
          </a>
        </Link>
      </div>
    </div>
  );
} 
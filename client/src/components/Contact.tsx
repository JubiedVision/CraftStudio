import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { faqs } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  project: string;
  budget: string;
  message: string;
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    project: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Get the form element
      const form = e.target as HTMLFormElement;
      
      // Let Netlify handle the form submission
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form) as any).toString()
      })
      .then(() => {
        // Reset form and show success message
        setFormData({
          name: "",
          email: "",
          project: "",
          budget: "",
          message: "",
        });
        
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });
        setIsSubmitting(false);
      })
      .catch(error => {
        console.error("Form submission error:", error);
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
        setIsSubmitting(false);
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  const formAnimation = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const infoAnimation = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif font-semibold text-[#1A2456] dark:text-white mb-4 text-3xl md:text-4xl">Let's Work Together</h2>
          <p className="text-neutral-600 dark:text-neutral-300 text-lg">
            Ready to transform your digital presence? Get in touch with us to discuss your project.
          </p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={formAnimation}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-md p-8">
              <h3 className="font-serif font-medium text-xl mb-6 text-[#1A2456] dark:text-white">Send Us a Message</h3>
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                {/* Hidden input for Netlify form handling */}
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>

                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    className="w-full px-4 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100" 
                    placeholder="John Doe" 
                    required 
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    className="w-full px-4 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100" 
                    placeholder="john@example.com" 
                    required 
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="project" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Project Type</label>
                  <select 
                    id="project"
                    name="project" 
                    className="w-full px-4 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                    value={formData.project}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a service</option>
                    <option value="app-design">App Design</option>
                    <option value="ux-research">UX Research</option>
                    <option value="website-design">Website Design</option>
                    <option value="no-code">No-Code Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Estimated Budget</label>
                  <select 
                    id="budget"
                    name="budget" 
                    className="w-full px-4 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                    value={formData.budget}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a budget range</option>
                    <option value="$1k-$5k">$1,000 - $5,000</option>
                    <option value="$5k-$10k">$5,000 - $10,000</option>
                    <option value="$10k-$25k">$10,000 - $25,000</option>
                    <option value="$25k+">$25,000+</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Project Details</label>
                  <textarea 
                    id="message"
                    name="message" 
                    rows={5} 
                    className="w-full px-4 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-[#0F8B8D] bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100" 
                    placeholder="Tell us about your project and what you're looking to achieve..."
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-[#1A2456] hover:bg-[#2A3466] text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>
          
          <motion.div
            variants={infoAnimation}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-md p-8 mb-8">
              <h3 className="font-serif font-medium text-xl mb-6 text-[#1A2456] dark:text-white">Book a Consultation</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                Prefer to talk directly? Schedule a 30-minute consultation call with our team to discuss your project needs.
              </p>
              <a href="#" className="block w-full bg-[#0F8B8D] hover:bg-[#1F9B9D] text-white font-medium py-3 px-4 rounded-md transition-colors text-center">
                <i className="far fa-calendar-alt mr-2"></i>
                <span>Schedule a Call</span>
              </a>
            </div>
            
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-md p-8">
              <h3 className="font-serif font-medium text-xl mb-6 text-[#1A2456] dark:text-white">Frequently Asked Questions</h3>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className={`${
                      index !== faqs.length - 1 ? "border-b border-neutral-200 dark:border-neutral-700 pb-4" : ""
                    }`}
                  >
                    <h4 className="font-medium text-[#1A2456] dark:text-white mb-2">{faq.question}</h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

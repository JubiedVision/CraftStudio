import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { process } from "@/lib/data";

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="process" className="py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif font-semibold text-[#1A2456] dark:text-white mb-4 text-3xl md:text-4xl">Our Process</h2>
          <p className="text-neutral-600 dark:text-neutral-300 text-lg">
            We follow a systematic approach to ensure every project delivers exceptional results and meets your business objectives.
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative max-w-4xl mx-auto pl-8 md:pl-16 before:absolute before:top-0 before:bottom-0 before:left-0 before:w-0.5 before:bg-[#0F8B8D]"
        >
          {process.map((step, index) => (
            <motion.div
              key={step.id}
              variants={item}
              className={`relative pb-16 ${index === process.length - 1 ? 'pb-0' : ''}`}
            >
              <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-[#0F8B8D] transform -translate-x-2"></div>
              <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-md p-6 ml-8">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full ${step.iconBg} flex items-center justify-center text-white`}>
                    <i className={step.icon}></i>
                  </div>
                  <h3 className="font-serif font-medium text-xl ml-4 text-[#1A2456] dark:text-white">{step.title}</h3>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  {step.description}
                </p>
                <ul className="space-y-2">
                  {step.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start">
                      <i className="fas fa-check text-[#0F8B8D] mt-1 mr-2"></i>
                      <span className="text-neutral-600 dark:text-neutral-400">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}
            className="inline-flex items-center bg-[#EC4E20] hover:bg-[#FC5E30] text-white font-medium px-6 py-3 rounded-md transition-colors"
          >
            <span>Start Your Journey</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

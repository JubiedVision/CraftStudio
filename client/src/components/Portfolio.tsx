import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioItems } from "@/lib/data";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const filterCategories = [
    { name: "All Projects", value: "all" },
    { name: "App Design", value: "app-design" },
    { name: "UX Research", value: "ux-research" },
    { name: "Website Design", value: "website-design" },
    { name: "No-Code", value: "no-code" },
  ];

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

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
    <section id="portfolio" className="py-20 bg-neutral-50 dark:bg-neutral-800">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif font-semibold text-[#1A2456] dark:text-white mb-4 text-3xl md:text-4xl">Our Portfolio</h2>
          <p className="text-neutral-600 dark:text-neutral-300 text-lg">
            Explore our recent projects and see how we've helped clients transform their digital presence.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-2" role="group" aria-label="Portfolio filters">
            {filterCategories.map((category) => (
              <button
                key={category.value}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeFilter === category.value
                    ? "bg-[#1A2456] text-white"
                    : "bg-white dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-600"
                }`}
                onClick={() => setActiveFilter(category.value)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={item}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9 }}
                className="portfolio-item bg-white dark:bg-neutral-900 rounded-lg shadow-md overflow-hidden transform-gpu will-change-transform transition-all duration-500 hover:shadow-xl"
                data-category={project.category}
                whileHover={{
                  y: -8,
                  transition: { 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 15 
                  }
                }}
              >
                <div className="relative overflow-hidden h-64 group">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0"
                    initial={{ opacity: 0 }}
                    whileHover={{ 
                      opacity: 1,
                      transition: { duration: 0.3 }
                    }}
                  />
                  <motion.div 
                    className="absolute inset-0"
                    whileHover={{ 
                      scale: 1.08,
                      transition: { 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 10,
                        duration: 0.6
                      }
                    }}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`${project.tagBg} text-white text-xs px-3 py-1 rounded-full`}>
                      {project.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-medium text-xl mb-2 text-[#1A2456] dark:text-white">{project.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">{project.description}</p>
                  <a href="#" className="text-[#0F8B8D] hover:text-[#1F9B9D] font-medium flex items-center transition-colors">
                    <span>View Case Study</span>
                    <i className="fas fa-arrow-right ml-2 text-sm"></i>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="text-center mt-12">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}
            className="inline-flex items-center bg-[#1A2456] hover:bg-[#2A3466] text-white font-medium px-6 py-3 rounded-md transition-colors"
          >
            <span>Start Your Project</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

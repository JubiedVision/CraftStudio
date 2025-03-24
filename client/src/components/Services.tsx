import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { services } from "@/lib/data";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const iconAnimation = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6 
      } 
    },
    hover: { 
      scale: 1.2,
      rotate: 5,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      } 
    }
  };

  const cardAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { 
      y: -8, 
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 20,
        duration: 0.3
      }
    }
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
    <section id="services" className="py-20 bg-neutral-50 dark:bg-neutral-800">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif font-semibold text-[#1A2456] dark:text-white mb-4 text-3xl md:text-4xl">Our Services</h2>
          <p className="text-neutral-600 dark:text-neutral-300 text-lg">
            We offer comprehensive design and development solutions focused on creating exceptional user experiences for digital products.
          </p>
        </div>
        
        <motion.div 
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={cardAnimation}
              whileHover="hover"
              className="service-card bg-white dark:bg-neutral-900 rounded-lg shadow-md overflow-hidden transform-gpu will-change-transform"
              data-category={service.category}
            >
              <div className={`h-48 ${service.bgColor} flex items-center justify-center p-6 relative overflow-hidden group`}>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 group-hover:from-black/5 group-hover:to-black/30 transition-all duration-200 ease-out"></div>
                <div className="absolute -right-6 -bottom-8 w-24 h-24 rounded-full bg-white/10 group-hover:scale-125 group-hover:bg-white/15 transition-transform duration-300 ease-out"></div>
                <div className="absolute -left-6 -top-8 w-16 h-16 rounded-full bg-white/5 group-hover:scale-110 group-hover:bg-white/10 transition-transform duration-300 ease-out"></div>
                <motion.i 
                  className={`${service.icon} text-white text-6xl relative z-10`}
                  variants={iconAnimation}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                ></motion.i>
              </div>
              <div className="p-6 border-t-4 border-transparent group-hover:border-t-4 group-hover:border-[#0F8B8D] transition-colors duration-200 ease-out">
                <h3 className="font-serif font-medium text-xl mb-3 text-[#1A2456] dark:text-white group-hover:text-[#0F8B8D] dark:group-hover:text-[#0F8B8D] transition-colors duration-200 ease-out">{service.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-check text-[#0F8B8D] mt-1 mr-2"></i>
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#contact");
                  }}
                  className="text-[#0F8B8D] hover:text-[#1F9B9D] font-medium flex items-center transition-colors group"
                >
                  <span>Learn more</span>
                  <i className="fas fa-arrow-right ml-2 text-sm group-hover:translate-x-1 transition-transform duration-200 ease-out"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

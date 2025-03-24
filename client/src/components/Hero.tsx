import { motion } from "framer-motion";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

export default function Hero() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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

  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "15+", label: "Industries Served" },
    { value: "4", label: "Core Services" },
  ];

  return (
    <section className="pt-40 pb-20 md:pt-48 md:pb-24 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <motion.div 
            className="md:col-span-7 space-y-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="font-serif font-semibold text-[#1A2456] dark:text-white leading-tight text-4xl md:text-5xl lg:text-6xl">
              Crafting <span className="text-[#0F8B8D]">exceptional</span> digital experiences centered around users
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl">
              A boutique digital agency specializing in user-centered design solutions that transform ideas into intuitive, engaging digital products.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                className="bg-[#EC4E20] hover:bg-[#FC5E30] text-white font-medium px-6 py-3 rounded-md transition-colors inline-flex items-center"
              >
                <span>Start Your Project</span>
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
              <a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#portfolio");
                }}
                className="border border-[#1A2456] hover:bg-[#1A2456] hover:text-white text-[#1A2456] dark:text-white dark:border-white font-medium px-6 py-3 rounded-md transition-colors inline-flex items-center"
              >
                <span>See Our Work</span>
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="md:col-span-5 relative"
            initial="hidden"
            animate="visible"
            variants={slideUp}
          >
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl bg-[#06052A]">
              <div className="absolute inset-0 flex items-center justify-center">
                <DotLottiePlayer
                  src="https://lottie.host/121c386a-fc79-45d8-a098-f850929f2277/s5bv434NsD.lottie"
                  autoplay
                  loop
                  renderer="svg"
                  background="transparent"
                  className="w-[90%] h-[90%]"
                  style={{ maxWidth: "450px" }}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#06052A] to-transparent p-6">
                <p className="text-white font-medium">Transforming complex problems into elegant solutions</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#0F8B8D] text-white p-4 rounded-md shadow-lg transform rotate-3 w-32 h-32 flex items-center justify-center text-center">
              <p className="font-serif font-medium">10+ years combined experience</p>
            </div>
          </motion.div>
        </div>
        <div className="mt-20 py-6 border-t border-b border-neutral-200 dark:border-neutral-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-between">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-serif text-3xl font-semibold text-[#1A2456] dark:text-white">{stat.value}</p>
                <p className="text-neutral-600 dark:text-neutral-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

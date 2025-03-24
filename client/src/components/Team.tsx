import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { team } from "@/lib/data";

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="team" className="py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif font-semibold text-[#1A2456] dark:text-white mb-4 text-3xl md:text-4xl">Meet Our Team</h2>
          <p className="text-neutral-600 dark:text-neutral-300 text-lg">
            A small, dedicated team of UX experts passionate about creating exceptional digital experiences.
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {team.map((member) => (
            <motion.div
              key={member.id}
              variants={item}
              className="bg-[#262626] rounded-lg shadow-md overflow-hidden hover:scale-[1.01] hover:shadow-xl transform-gpu will-change-transform transition-all duration-500 ease-out"
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={member.image} 
                  alt={`${member.name} - ${member.role}`} 
                  className="w-full h-full object-cover object-top"
                  style={{ objectPosition: "center 20%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>
              </div>
              <div className="p-5">
                <h3 className="font-serif font-medium text-lg text-white">{member.name}</h3>
                <p className="text-neutral-300 text-sm">{member.role}</p>
              </div>
              <div className="p-5 pt-0">
                <p className="text-neutral-300 text-sm mb-4">
                  {member.bio}
                </p>
                <div className="border-t border-neutral-700 pt-4 mt-3">
                  <h4 className="font-medium text-white text-sm mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {member.expertise.map((skill, index) => (
                      <span key={index} className="bg-[#0F8B8D]/20 text-[#4ce2e5] text-xs px-2.5 py-0.5 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex gap-3">
                  {member.social.map((platform, index) => (
                    <a 
                      key={index}
                      href={platform.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      <i className={`${platform.icon} text-lg`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

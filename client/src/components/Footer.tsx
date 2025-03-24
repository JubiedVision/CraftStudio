import { Link } from "wouter";

export default function Footer() {
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A2456] dark:bg-[#2A3466] text-white py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-white font-serif font-semibold text-2xl">
              Ux<span className="text-[#0F8B8D]">CraftStudio</span>
            </Link>
            <p className="mt-4 text-white/80 max-w-md">
              A boutique digital agency specializing in user-centered design solutions that transform ideas into intuitive, engaging digital products.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <i className="fab fa-dribbble text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Services", href: "#services" },
                { name: "Team", href: "#team" },
                { name: "Portfolio", href: "#portfolio" },
                { name: "Process", href: "#process" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-envelope text-[#0F8B8D] mt-1 mr-2"></i>
                <a href="mailto:hello@uxcraftstudio.com" className="text-white/80 hover:text-white transition-colors">
                  hello@uxcraftstudio.com
                </a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone text-[#0F8B8D] mt-1 mr-2"></i>
                <a href="tel:+11234567890" className="text-white/80 hover:text-white transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-[#0F8B8D] mt-1 mr-2"></i>
                <span className="text-white/80">San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {currentYear} UxCraftStudio. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-white/60 hover:text-white/80 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white/80 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

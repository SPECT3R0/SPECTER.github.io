import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { Icon: Github, href: 'https://github.com/SPECT3R0', label: 'GitHub' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/junaid-arshad-malik-644b11291/', label: 'LinkedIn' },
    { Icon: Twitter, href: 'https://twitter.com/_junaidarshad', label: 'Twitter' },
    { Icon: Mail, href: '<mailto:Junaid Arshad Malik className="info"></mailto:junaidarshad>@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#writeups', label: 'Writeups' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-background-dark border-t border-gray-800 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-semibold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              SPECT3R.
            </h3>
            <p className="text-gray-400 max-w-xs">
              Cybersecurity Specialist & Digital Investigator, turning digital chaos into clarity.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  whileHover={{ 
                    scale: 1.2, 
                    color: '#fff',
                    textShadow: "0 0 8px rgb(99, 102, 241)"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={label}>
                  <a 
                    href={href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 group inline-flex items-center"
                  >
                    <span className="relative">
                      {label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: junaidarshad.info@gmail.com</li>
              <li>Based in: Islamabad, Pakistan</li>
            </ul>
            <motion.a
              href="src\components\Resume"
              className="inline-block mt-4 text-primary-400 hover:text-primary-300 transition-colors duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative">
                Download Resume
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
              </span>
            </motion.a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Junaid. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 group bg-gray-800 hover:bg-gray-700 transition-colors duration-300 rounded-full p-2"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
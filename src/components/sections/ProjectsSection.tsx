import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, slideIn } from '../../utils/animation';
import SectionHeading from '../ui/SectionHeading';
import { X, ExternalLink, Github } from 'lucide-react';
import AnimatedButton from '../ui/AnimatedButton';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
  detailedDescription: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  return (
    <motion.div 
      {...fadeIn('up', index * 0.1 + 0.2)}
      className="group cursor-pointer"
      onClick={onClick}
      whileHover={{ y: -10 }}
    >
      <div className="relative overflow-hidden rounded-lg bg-gray-900/50 border border-gray-800 hover:border-primary-500/50 transition-all duration-300">
        <div className="h-48 overflow-hidden">
          <motion.img 
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        </div>
        
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.slice(0, 3).map((tag, tagIndex) => (
              <span 
                key={tagIndex}
                className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
        
        <div className="absolute inset-0 bg-primary-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-background-dark/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
            View Details
          </span>
        </div>
      </div>
    </motion.div>
  );
};

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;
  
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="relative bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        {...slideIn('up', 'spring', 0, 0.5)}
      >
        <button 
          className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        
        <div className="h-64 sm:h-80 overflow-hidden">
          <img 
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        </div>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <p className="text-gray-300 mb-6">{project.detailedDescription}</p>
          
          <div className="flex flex-wrap gap-4">
            {project.demoLink && (
              <AnimatedButton 
                href={project.demoLink} 
                primary
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} className="mr-2" />
                Live Demo
              </AnimatedButton>
            )}
            
            {project.codeLink && (
              <AnimatedButton
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} className="mr-2" />
                View Code
              </AnimatedButton>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "SecureNet Analyzer",
      description: "A network traffic analysis tool for detecting anomalies and potential security threats.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Python", "Machine Learning", "Network Security", "TensorFlow"],
      demoLink: "https://secureanalyzer.example.com",
      codeLink: "https://github.com/junaid/secure-analyzer",
      detailedDescription: "SecureNet Analyzer is a sophisticated network traffic analysis tool designed to detect anomalies and potential security threats in real-time. Leveraging advanced machine learning algorithms and heuristic analysis, it can identify patterns indicative of malicious activity, data exfiltration attempts, and zero-day exploits. The system features a user-friendly dashboard for security analysts to monitor and respond to threats effectively, with detailed logging and reporting capabilities."
    },
    {
      id: 2,
      title: "MalwareX Scanner",
      description: "An advanced malware detection and analysis platform for identifying sophisticated threats.",
      image: "https://images.pexels.com/photos/5380592/pexels-photo-5380592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["C++", "Assembly", "Reverse Engineering", "Sandbox"],
      demoLink: "https://malwarex.example.com",
      codeLink: "https://github.com/junaid/malwarex",
      detailedDescription: "MalwareX Scanner is a comprehensive malware detection and analysis platform designed to identify and neutralize sophisticated threats, including polymorphic malware, fileless attacks, and advanced persistent threats (APTs). The system employs dynamic analysis in isolated sandbox environments, coupled with static code analysis and machine learning-based pattern recognition to provide accurate threat identification with minimal false positives. Security teams can use its detailed reports to understand attack vectors and improve defensive postures."
    },
    {
      id: 3,
      title: "CryptoGuard",
      description: "A blockchain security auditing tool for identifying vulnerabilities in smart contracts.",
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Solidity", "Blockchain", "Smart Contracts", "Ethereum"],
      codeLink: "https://github.com/junaid/cryptoguard",
      detailedDescription: "CryptoGuard is a specialized blockchain security auditing tool designed to identify vulnerabilities in smart contracts before deployment. The platform performs comprehensive static and dynamic analysis of Solidity code, checking for common vulnerabilities such as reentrancy attacks, integer overflow/underflow, and front-running opportunities. With support for multiple blockchain platforms including Ethereum, Binance Smart Chain, and Polygon, CryptoGuard helps developers and auditors ensure the security and integrity of decentralized applications and financial systems."
    },
    {
      id: 4,
      title: "PhishDetect",
      description: "An AI-powered phishing detection service that identifies and neutralizes social engineering attempts.",
      image: "https://images.pexels.com/photos/5380635/pexels-photo-5380635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Python", "Machine Learning", "NLP", "Email Security"],
      demoLink: "https://phishdetect.example.com",
      detailedDescription: "PhishDetect is an AI-powered phishing detection service designed to identify and neutralize sophisticated social engineering attempts. Using advanced natural language processing and computer vision algorithms, it analyzes email content, sender behavior, link properties, and website characteristics to determine phishing probability with high accuracy. The system integrates with popular email platforms and web browsers, providing real-time protection for users while continuously learning from new attack patterns to improve detection capabilities."
    },
    {
      id: 5,
      title: "ForensicDataMiner",
      description: "A digital forensics toolkit for recovering and analyzing evidence from various digital sources.",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["C", "Python", "Digital Forensics", "Data Recovery"],
      codeLink: "https://github.com/junaid/forensic-miner",
      detailedDescription: "ForensicDataMiner is a comprehensive digital forensics toolkit designed for professional investigators to recover and analyze evidence from various digital sources, including damaged devices, deleted files, and encrypted storage. The platform supports a wide range of file systems and device types, with specialized modules for memory forensics, timeline analysis, and cryptographic key recovery. Its intuitive workflow system ensures proper chain of custody documentation while providing powerful visualization tools to correlate evidence across multiple sources."
    },
    {
      id: 6,
      title: "ThreatIntel Dashboard",
      description: "A real-time threat intelligence platform aggregating data from multiple sources for security analysts.",
      image: "https://images.pexels.com/photos/5380659/pexels-photo-5380659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["JavaScript", "React", "API Integration", "Visualization"],
      demoLink: "https://threatintel.example.com",
      detailedDescription: "ThreatIntel Dashboard is a sophisticated real-time threat intelligence platform that aggregates and correlates data from multiple sources, including commercial feeds, open-source intelligence, dark web monitoring, and internal security systems. Designed for security analysts and SOC teams, it provides customizable dashboards with advanced filtering, alerting, and visualization capabilities to identify emerging threats relevant to an organization's specific risk profile. The platform features automated indicator of compromise (IOC) extraction and MITRE ATT&CK framework mapping to enhance threat hunting and incident response activities."
    }
  ];
  
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Projects" 
          subtitle="Explore my latest work in cybersecurity and digital investigation"
          centered
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>
      
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
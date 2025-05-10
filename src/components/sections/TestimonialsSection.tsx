import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animation';
import SectionHeading from '../ui/SectionHeading';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "Junaid Arshad Malik made a strong impression during his 4-month internship at NCCS. He contributed to key modules including scraping, optimization, multithreading, and server configuration—all focused on web security and automated pentesting. Junaid’s technical expertise, collaborative nature, and clear communication made him a valuable asset to our team. I highly recommend him for any future projects.",
      name: "Sameer Khattak",
      role: "Team Lead",
      company: "NCCS",
     
    },
    {
      id: 2,
      content: "The incident response services provided by Junaid were exceptional. When we detected a potential breach, his quick action and forensic capabilities helped us contain the threat and prevent data loss. The detailed post-incident report was invaluable for improving our security posture.",
      name: "Michael Chen",
      role: "CISO",
      company: "Global Retail Corp",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      content: "Working with Junaid on our security compliance initiative was a game-changer. His deep knowledge of regulatory requirements and practical implementation strategies helped us achieve ISO 27001 certification months ahead of schedule.",
      name: "Aisha Patel",
      role: "Security Director",
      company: "HealthTech Innovations",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      content: "Junaid delivered an outstanding security awareness training program for our organization. His engaging presentation style and real-world examples resonated with employees at all technical levels, resulting in measurable improvements in our security culture.",
      name: "David Rodriguez",
      role: "IT Manager",
      company: "EducationFirst",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const goToSpecific = (index: number) => {
    setCurrentIndex(index);
  };
  
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(goToNext, 6000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);
  
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Testimonials" 
          subtitle="What clients and colleagues say about my work"
          centered
        />
        
        <div 
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={testimonial.id}
                  {...fadeIn('up', 0.2)}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-gray-800 relative">
                    <Quote className="absolute top-4 left-4 text-primary-500/20 h-16 w-16" />
                    
                    <div className="text-center relative z-10">
                      <p className="text-gray-300 mb-6 italic relative z-10">"{testimonial.content}"</p>
                      
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-primary-500">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-white">{testimonial.name}</h4>
                          <p className="text-gray-400 text-sm">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => goToSpecific(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary-500 w-6' 
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <motion.button 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 lg:-translate-x-12 bg-gray-800/80 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none"
            onClick={goToPrevious}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </motion.button>
          
          <motion.button 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 lg:translate-x-12 bg-gray-800/80 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none"
            onClick={goToNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
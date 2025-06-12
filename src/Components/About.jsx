import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    hover: {
      scale: 1.05,
      zIndex: 10,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section className="py-16 overflow-hidden bg-white lg:py-24">
      <div className="px-[10%] mx-auto"> {/* 80% width with 10% margin on each side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h2 
              variants={itemVariants}
              className="font-serif text-4xl font-bold leading-tight text-gray-900 md:text-5xl"
            >
              <motion.span 
                initial={{ color: '#00609a' }}
                whileInView={{ 
                  color: ['#00609a', '#003d66', '#00609a'],
                  transition: { duration: 3, repeat: Infinity }
                }}
                className="inline-block"
              >
                Progress
              </motion.span> With<br />
              <span className="text-[#00609a]">MAYA British College</span>
            </motion.h2>
            
            <motion.div 
              variants={itemVariants}
              className="h-1 w-20 bg-gradient-to-r from-[#00609a] to-[#003d66] origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-600 border-l-4 border-[#00609a] pl-4 italic">
                MAYA British College is dedicated to transforming higher education in Nepal by providing internationally recognized and industry relevant qualification.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700">
                In academic partnership with the University of Central Lancashire (UCLan), UK, MAYA British College is redefining the academic landscape with a bold vision—bridging the gap between academic learning and real-world industry demands.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700">
                The college's commitment to academic excellence is reflected in its inclusive, affordable approach that delivers international standards while embracing core local values.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-8"
            >
              <button className="px-8 py-3 font-medium text-white transition-all duration-300 transform bg-[#00609a] rounded-lg hover:bg-[#003d66] hover:scale-105 hover:shadow-lg">
                Learn More About Us
              </button>
            </motion.div>
          </motion.div>
          
          <div className="relative grid grid-cols-2 gap-4">
            <motion.div 
              variants={imageVariants}
              whileHover="hover"
              className="relative h-64 overflow-hidden shadow-2xl rounded-xl sm:h-80 lg:h-96 group"
            >
              <img 
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                src="/PhotoofMayaCollege.webp" 
                alt="MAYA British College Campus" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <span className="absolute font-serif text-lg font-medium text-white bottom-4 left-4 text-shadow">MAYA Campus</span>
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#00609a]/50 transition-all duration-300 pointer-events-none"></div>
            </motion.div>
            
            <motion.div 
              variants={imageVariants}
              whileHover="hover"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative h-64 mt-8 overflow-hidden shadow-2xl rounded-xl sm:h-80 lg:h-96 lg:mt-12 group"
            >
              <img 
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                src="/PhotoofUCLan.jpg" 
                alt="University of Central Lancashire" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <span className="absolute font-serif text-lg font-medium text-white bottom-4 left-4 text-shadow">UCLan UK</span>
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#00609a]/50 transition-all duration-300 pointer-events-none"></div>
            </motion.div>
            
            {/* Premium decorative elements */}
            <div className="absolute -z-10 -right-10 -top-10 w-32 h-32 rounded-full bg-[#00609a]/10 blur-xl animate-pulse"></div>
            <div className="absolute -z-10 -left-10 -bottom-10 w-40 h-40 rounded-full bg-[#00609a]/10 blur-xl animate-pulse"></div>
            
            {/* Classic corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#00609a] opacity-30"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#00609a] opacity-30"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
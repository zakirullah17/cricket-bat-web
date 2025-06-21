



import { FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gray-900  text-white min-h-screen flex items-center pt-16 md:pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-amber-400 font-medium mb-4 mt-8 tracking-wider">PREMIUM CRICKET EQUIPMENT</p>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              <span className="text-amber-400">XYZ</span> Professional <br className="hidden sm:block" /> Cricket Bats
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-lg">
              Handcrafted in Sialkot using Grade 1 English Willow. Used by professional players worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-full flex items-center transition-all duration-300 group shadow-lg shadow-amber-600/20"
              >
                Shop Collection <FiChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-lg shadow-white/10"
              >
                Our Craftsmanship
              </motion.button>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((item) => (
                  <img 
                    key={item}
                    src={`https://randomuser.me/api/portraits/men/${item + 20}.jpg`}
                    alt="Player"
                    className="w-12 h-12 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div>
                <p className="font-medium">Trusted by professionals</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-gray-300">200+ Reviews</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-xl mx-auto lg:ml-auto">
              <img 
                src="https://media.istockphoto.com/id/1479015492/photo/cricket-bats-on-shelving-rack.webp?a=1&b=1&s=612x612&w=0&k=20&c=nJ3YkpNz4pCEAGE0sqGLwbp3XyF8yLokQZCUA1mgMmE=" 
                alt="Premium Cricket Bats" 
                className="w-full rounded-xl shadow-2xl object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-gray-900 p-4 rounded-lg shadow-lg w-48">
                <p className="font-bold text-lg">Since 1985</p>
                <p className="text-sm">Crafting excellence</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
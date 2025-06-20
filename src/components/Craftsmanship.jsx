// components/Craftsmanship.jsx
import { FiAward, FiUsers, FiGlobe } from 'react-icons/fi';

const Craftsmanship = () => {
  return (
    <section id="craftsmanship" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Our Bats?</h2>
          <p className="text-gray-600">
            Precision engineering meets traditional craftsmanship for unmatched performance
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center p-6 hover:shadow-lg transition duration-300 rounded-lg bg-white">
            <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <FiUsers className="h-8 w-8 text-amber-500" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-3">Player-Endorsed</h3>
            <p className="text-gray-600">Designed with input from professional cricketers for optimal performance</p>
          </div>
          
          <div className="text-center p-6 hover:shadow-lg transition duration-300 rounded-lg bg-white">
            <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <FiGlobe className="h-8 w-8 text-amber-500" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-3">Global Standards</h3>
            <p className="text-gray-600">Manufactured in Sialkot, Pakistan - the world's cricket equipment capital</p>
          </div>
          
          <div className="text-center p-6 hover:shadow-lg transition duration-300 rounded-lg bg-white">
            <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <FiAward className="h-8 w-8 text-amber-500" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-3">Proven Quality</h3>
            <p className="text-gray-600">Trusted by club players and professionals alike for 25+ years</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;


import { FiShoppingCart, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const allProducts = [
  {
    id: 1,
    name: "Professional Elite",
    price: 299,
    description: "Our top-tier bat used by international players",
    image: "https://media.istockphoto.com/id/493868298/photo/close-up-of-a-cricket-bat.jpg?s=612x612&w=0&k=20&c=bWtWaG6HUDJQ1yACtWY_FRgtH1rz5HMrPD4hrgr3aGI=",
    category: "premium"
  },
  {
    id: 2,
    name: "County Classic",
    price: 199,
    description: "Perfect for county-level players",
    image: "https://media.istockphoto.com/id/1479014360/photo/modern-generic-brand-cricket-bat.jpg?s=612x612&w=0&k=20&c=gWh9EpwfUb4WvjBGvb-Iato1YOdS6Kf9XX030029LC0=",
    category: "standard"
  },
  {
    id: 3,
    name: "Club Champion",
    price: 149,
    description: "Ideal for club cricketers",
    image: "https://media.istockphoto.com/id/1306078671/photo/cricket-bat-and-ball-place-on-cricket-ground-green-grass.jpg?s=612x612&w=0&k=20&c=pxmLTFehFUqtopSBZce0aCncNvpLQIg4et1tRloqalI=",
    category: "standard"
  },
  {
    id: 4,
    name: "Junior Pro",
    price: 99,
    description: "Designed for young aspiring players",
    image: "https://media.istockphoto.com/id/493868350/photo/close-up-of-a-cricket-bat.jpg?s=612x612&w=0&k=20&c=Tp9Eij9QagUOlXwDmJtlvZCKoosXyOH2z8nn-SeXclM=",
    category: "junior"
  },
  {
    id: 5,
    name: "Limited Edition",
    price: 399,
    description: "Exclusive hand-signed collector's item",
    image: "https://media.istockphoto.com/id/535985843/photo/cricket-bat-and-ball.jpg?s=612x612&w=0&k=20&c=pF0L5BIrFGJR0LghRUUrWqiBjaBbUgdKoIITe7XrLBE=",
    category: "premium"
  },
  {
    id: 6,
    name: "T20 Power",
    price: 249,
    description: "Optimized for explosive hitting",
    image: "https://media.istockphoto.com/id/493868244/photo/close-up-of-a-cricket-ball-with-a-bat.jpg?s=612x612&w=0&k=20&c=GYmB99ZSmmYCgkwbSFKqbXQSPcctNR2POuCYjUYNeBM=",
    category: "t20"
  },
  {
    id: 7,
    name: "Test Match Special",
    price: 279,
    description: "For the traditionalist with perfect balance",
    image: "https://media.istockphoto.com/id/1479015492/photo/cricket-bats-on-shelving-rack.webp?a=1&b=1&s=612x612&w=0&k=20&c=nJ3YkpNz4pCEAGE0sqGLwbp3XyF8yLokQZCUA1mgMmE=",
    category: "test"
  },
  {
    id: 8,
    name: "ODI Dominator",
    price: 229,
    description: "Lightweight for quick stroke play",
    image: "https://media.istockphoto.com/id/1479014360/photo/modern-generic-brand-cricket-bat.jpg?s=612x612&w=0&k=20&c=gWh9EpwfUb4WvjBGvb-Iato1YOdS6Kf9XX030029LC0=",
    category: "odi"
  },
  {
    id: 9,
    name: "Junior Ace",
    price: 89,
    description: "Perfect for young beginners",
    image: "https://media.istockphoto.com/id/493868350/photo/close-up-of-a-cricket-bat.jpg?s=612x612&w=0&k=20&c=Tp9Eij9QagUOlXwDmJtlvZCKoosXyOH2z8nn-SeXclM=",
    category: "junior"
  },
  {
    id: 10,
    name: "Power Hitter",
    price: 259,
    description: "Designed for maximum power",
    image: "https://media.istockphoto.com/id/535985843/photo/cricket-bat-and-ball.jpg?s=612x612&w=0&k=20&c=pF0L5BIrFGJR0LghRUUrWqiBjaBbUgdKoIITe7XrLBE=",
    category: "t20"
  },
  {
    id: 11,
    name: "Classic Willow",
    price: 179,
    description: "Traditional English willow",
    image: "https://media.istockphoto.com/id/493868244/photo/close-up-of-a-cricket-ball-with-a-bat.jpg?s=612x612&w=0&k=20&c=GYmB99ZSmmYCgkwbSFKqbXQSPcctNR2POuCYjUYNeBM=",
    category: "standard"
  },
  {
    id: 12,
    name: "Tournament Pro",
    price: 349,
    description: "Used in professional tournaments",
    image: "https://media.istockphoto.com/id/1479015492/photo/cricket-bats-on-shelving-rack.webp?a=1&b=1&s=612x612&w=0&k=20&c=nJ3YkpNz4pCEAGE0sqGLwbp3XyF8yLokQZCUA1mgMmE=",
    category: "premium"
  },
  {
    id: 13,
    name: "Lightning Strike",
    price: 229,
    description: "Ultra-light for quick reactions",
    image: "https://media.istockphoto.com/id/1479014360/photo/modern-generic-brand-cricket-bat.jpg?s=612x612&w=0&k=20&c=gWh9EpwfUb4WvjBGvb-Iato1YOdS6Kf9XX030029LC0=",
    category: "t20"
  },
  {
    id: 14,
    name: "Defensive Master",
    price: 199,
    description: "Perfect for defensive players",
    image: "https://media.istockphoto.com/id/493868298/photo/close-up-of-a-cricket-bat.jpg?s=612x612&w=0&k=20&c=bWtWaG6HUDJQ1yACtWY_FRgtH1rz5HMrPD4hrgr3aGI=",
    category: "test"
  },
  {
    id: 15,
    name: "All-Rounder",
    price: 279,
    description: "Balanced for all playing styles",
    image: "https://media.istockphoto.com/id/1479014360/photo/modern-generic-brand-cricket-bat.jpg?s=612x612&w=0&k=20&c=gWh9EpwfUb4WvjBGvb-Iato1YOdS6Kf9XX030029LC0=",
    category: "odi"
  },
  {
    id: 16,
    name: "Signature Series",
    price: 399,
    description: "Limited edition signed by pros",
    image: "https://media.istockphoto.com/id/1306078671/photo/cricket-bat-and-ball-place-on-cricket-ground-green-grass.jpg?s=612x612&w=0&k=20&c=pxmLTFehFUqtopSBZce0aCncNvpLQIg4et1tRloqalI=",
    category: "premium"
  },
  {
    id: 17,
    name: "T20 Blaster",
    price: 249,
    description: "Optimized for short formats",
    image: "https://media.istockphoto.com/id/493868350/photo/close-up-of-a-cricket-bat.jpg?s=612x612&w=0&k=20&c=Tp9Eij9QagUOlXwDmJtlvZCKoosXyOH2z8nn-SeXclM=",
    category: "t20"
  },
  {
    id: 18,
    name: "Test Match Pro",
    price: 329,
    description: "For the long game specialists",
    image: "https://media.istockphoto.com/id/535985843/photo/cricket-bat-and-ball.jpg?s=612x612&w=0&k=20&c=pF0L5BIrFGJR0LghRUUrWqiBjaBbUgdKoIITe7XrLBE=",
    category: "test"
  },
  {
    id: 19,
    name: "Women's Elite",
    price: 219,
    description: "Designed for women cricketers",
    image: "https://media.istockphoto.com/id/493868244/photo/close-up-of-a-cricket-ball-with-a-bat.jpg?s=612x612&w=0&k=20&c=GYmB99ZSmmYCgkwbSFKqbXQSPcctNR2POuCYjUYNeBM=",
    category: "women"
  },
  {
    id: 20,
    name: "Legends Edition",
    price: 459,
    description: "Collector's item with premium finish",
    image: "https://media.istockphoto.com/id/1479015492/photo/cricket-bats-on-shelving-rack.webp?a=1&b=1&s=612x612&w=0&k=20&c=nJ3YkpNz4pCEAGE0sqGLwbp3XyF8yLokQZCUA1mgMmE=",
    category: "premium"
  }
];

const Products = () => {
  const [displayCount, setDisplayCount] = useState(10); // Default 10 for mobile
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setDisplayCount(mobile ? 10 : 12); // Show 10 on mobile, 12 on desktop
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Products to display
  const visibleProducts = showAll ? allProducts : allProducts.slice(0, displayCount);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl mt-4 font-bold mb-4 text-center">Explore Our Cricket Bats</h1>
      
      <p className="text-sm mb-8 text-center">Crafted for champions, built to perform.</p>
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {visibleProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="h-48 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-amber-600">${product.price}</span>
                <button className="flex items-center bg-gray-900 hover:bg-gray-800 text-white py-1 px-3 rounded text-sm">
                  <FiShoppingCart className="mr-1" /> Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More/Less Button */}
      {allProducts.length > displayCount && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-6 rounded-full transition"
          >
            {showAll ? (
              <>
                <FiChevronUp className="mr-2" />
                Show Less
              </>
            ) : (
              <>
                <FiChevronDown className="mr-2" />
                {isMobile ? 'Show All 20 Products' : 'Load More Products'}
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
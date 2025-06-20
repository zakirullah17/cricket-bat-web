


// // components/Products.jsx
// import { FiShoppingCart, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
// import { useState } from 'react';

// const products = [
//   {
//     id: 1,
//     name: "Professional Elite",
//     price: 299,
//     description: "Our top-tier bat used by international players",
//     image: "https://media.istockphoto.com/id/493868298/photo/close-up-of-a-cricket-bat.jpg?s=612x612&w=0&k=20&c=bWtWaG6HUDJQ1yACtWY_FRgtH1rz5HMrPD4hrgr3aGI="
//   },
//   {
//     id: 2,
//     name: "County Classic",
//     price: 199,
//     description: "Perfect for county-level players",
//     image: "https://media.istockphoto.com/id/1479014360/photo/modern-generic-brand-cricket-bat.jpg?s=612x612&w=0&k=20&c=gWh9EpwfUb4WvjBGvb-Iato1YOdS6Kf9XX030029LC0="
//   },
//   {
//     id: 3,
//     name: "Club Champion",
//     price: 149,
//     description: "Ideal for club cricketers",
//     image: "https://media.istockphoto.com/id/1306078671/photo/cricket-bat-and-ball-place-on-cricket-ground-green-grass.jpg?s=612x612&w=0&k=20&c=pxmLTFehFUqtopSBZce0aCncNvpLQIg4et1tRloqalI="
//   },
//   {
//     id: 4,
//     name: "Junior Pro",
//     price: 99,
//     description: "Designed for young aspiring players",
//     image: "https://media.istockphoto.com/id/493868350/photo/close-up-of-a-cricket-bat.jpg?s=612x612&w=0&k=20&c=Tp9Eij9QagUOlXwDmJtlvZCKoosXyOH2z8nn-SeXclM="
//   },
//   {
//     id: 5,
//     name: "Limited Edition",
//     price: 399,
//     description: "Exclusive hand-signed collector's item",
//     image: "https://media.istockphoto.com/id/535985843/photo/cricket-bat-and-ball.jpg?s=612x612&w=0&k=20&c=pF0L5BIrFGJR0LghRUUrWqiBjaBbUgdKoIITe7XrLBE="
//   },
//   {
//     id: 6,
//     name: "T20 Power",
//     price: 249,
//     description: "Optimized for explosive hitting",
//     image: "https://media.istockphoto.com/id/493868244/photo/close-up-of-a-cricket-ball-with-a-bat.jpg?s=612x612&w=0&k=20&c=GYmB99ZSmmYCgkwbSFKqbXQSPcctNR2POuCYjUYNeBM="
//   },
//   {
//     id: 7,
//     name: "Test Match Special",
//     price: 279,
//     description: "For the traditionalist with perfect balance",
//     image: "https://media.istockphoto.com/id/1479015492/photo/cricket-bats-on-shelving-rack.webp?a=1&b=1&s=612x612&w=0&k=20&c=nJ3YkpNz4pCEAGE0sqGLwbp3XyF8yLokQZCUA1mgMmE="
//   },
//   {
//     id: 8,
//     name: "ODI Dominator",
//     price: 229,
//     description: "Lightweight for quick stroke play",
//     image: "https://media.istockphoto.com/id/1479014360/photo/modern-generic-brand-cricket-bat.jpg?s=612x612&w=0&k=20&c=gWh9EpwfUb4WvjBGvb-Iato1YOdS6Kf9XX030029LC0="
//   }
// ];

// const Products = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [showGrid, setShowGrid] = useState(false);

//   // Calculate how many slides to show based on screen width
//   const getSlidesToShow = () => {
//     if (typeof window === 'undefined') return 3;
//     if (window.innerWidth < 768) return 1;
//     if (window.innerWidth < 1024) return 2;
//     return 3;
//   };

//   const slidesToShow = getSlidesToShow();
//   const totalSlides = Math.ceil(products.length / slidesToShow);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
//   };

//   // Get products for current slide
//   const getVisibleProducts = () => {
//     const start = currentSlide * slidesToShow;
//     const end = start + slidesToShow;
//     return products.slice(start, end);
//   };

//   return (
//     <section id="products" className="py-20 bg-white">
//       <div className="container mx-auto px-6">
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <h2 className="text-3xl font-bold text-gray-900">Explore Our Latest Bats</h2>
//           <p className="text-gray-600 mt-2">Crafted for champions, built to perform.</p>
//         </div>

//         {/* Toggle between slider and grid view */}
//         <div className="flex justify-center mb-8">
//           <button
//             onClick={() => setShowGrid(false)}
//             className={`px-4 py-2 rounded-l-lg ${!showGrid ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-700'}`}
//           >
//             Slider View
//           </button>
//           <button
//             onClick={() => setShowGrid(true)}
//             className={`px-4 py-2 rounded-r-lg ${showGrid ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-700'}`}
//           >
//             Grid View
//           </button>
//         </div>

//         {showGrid ? (
//           // Grid View
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {products.map((product) => (
//               <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
//                 <div className="h-64 overflow-hidden">
//                   <img 
//                     src={product.image} 
//                     alt={product.name} 
//                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
//                   <p className="text-gray-600 mb-4">{product.description}</p>
//                   <div className="flex justify-between items-center">
//                     <span className="text-2xl font-bold text-amber-600">${product.price}</span>
//                     <button className="flex items-center bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded transition">
//                       <FiShoppingCart className="mr-2" /> Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           // Slider View
//           <div className="relative">
//             <div className="overflow-hidden">
//               <div 
//                 className="flex transition-transform duration-300 ease-in-out"
//                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//               >
//                 {Array.from({ length: totalSlides }).map((_, slideIndex) => (
//                   <div key={slideIndex} className="w-full flex-shrink-0 px-2">
//                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                       {products.slice(slideIndex * slidesToShow, (slideIndex + 1) * slidesToShow).map((product) => (
//                         <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
//                           <div className="h-64 overflow-hidden">
//                             <img 
//                               src={product.image} 
//                               alt={product.name} 
//                               className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                             />
//                           </div>
//                           <div className="p-6">
//                             <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
//                             <p className="text-gray-600 mb-4">{product.description}</p>
//                             <div className="flex justify-between items-center">
//                               <span className="text-2xl font-bold text-amber-600">${product.price}</span>
//                               <button className="flex items-center bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded transition">
//                                 <FiShoppingCart className="mr-2" /> Add to Cart
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Navigation Arrows */}
//             <button 
//               onClick={prevSlide}
//               className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
//               aria-label="Previous slide"
//             >
//               <FiChevronLeft className="h-6 w-6 text-gray-800" />
//             </button>
//             <button 
//               onClick={nextSlide}
//               className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
//               aria-label="Next slide"
//             >
//               <FiChevronRight className="h-6 w-6 text-gray-800" />
//             </button>

//             {/* Slide Indicators */}
//             <div className="flex justify-center mt-6 space-x-2">
//               {Array.from({ length: totalSlides }).map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentSlide(index)}
//                   className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-amber-600' : 'bg-gray-300'}`}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         )}

//         {/* View All Button */}
//         <div className="text-center mt-12">
//           <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded transition">
//             View All Products
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Products;



import { FiShoppingCart } from 'react-icons/fi';
import { useState } from 'react';

const allProducts = [
  // Existing 8 products
  {
    id: 1,
    name: "Professional Elite",
    price: 299,
    description: "Our top-tier bat used by international players",
    image: "https://media.istockphoto.com/id/493868298/photo/close-up-of-a-cricket-bat.jpg?s=612x612&w=0&k=20&c=bWtWaG6HUDJQ1yACtWY_FRgtH1rz5HMrPD4hrgr3aGI="
  },
  {
    id: 2,
    name: "County Classic",
    price: 199,
    description: "Perfect for county-level players",
    image: "https://media.istockphoto.com/id/1479014360/photo/modern-generic-brand-cricket-bat.jpg?s=612x612&w=0&k=20&c=gWh9EpwfUb4WvjBGvb-Iato1YOdS6Kf9XX030029LC0="
  },
  // Add 12 more products to reach 20 total
  {
    id: 9,
    name: "Junior Ace",
    price: 89,
    description: "Perfect for young beginners",
    image: "https://media.istockphoto.com/id/493868350/photo/close-up-of-a-cricket-bat.jpg?s=612x612&w=0&k=20&c=Tp9Eij9QagUOlXwDmJtlvZCKoosXyOH2z8nn-SeXclM="
  },
  {
    id: 10,
    name: "Power Hitter",
    price: 259,
    description: "Designed for maximum power",
    image: "https://media.istockphoto.com/id/535985843/photo/cricket-bat-and-ball.jpg?s=612x612&w=0&k=20&c=pF0L5BIrFGJR0LghRUUrWqiBjaBbUgdKoIITe7XrLBE="
  },
  {
    id: 11,
    name: "Classic Willow",
    price: 179,
    description: "Traditional English willow",
    image: "https://media.istockphoto.com/id/493868244/photo/close-up-of-a-cricket-ball-with-a-bat.jpg?s=612x612&w=0&k=20&c=GYmB99ZSmmYCgkwbSFKqbXQSPcctNR2POuCYjUYNeBM="
  },
  {
    id: 12,
    name: "Tournament Pro",
    price: 349,
    description: "Used in professional tournaments",
    image: "https://media.istockphoto.com/id/1479015492/photo/cricket-bats-on-shelving-rack.webp?a=1&b=1&s=612x612&w=0&k=20&c=nJ3YkpNz4pCEAGE0sqGLwbp3XyF8yLokQZCUA1mgMmE="
  },
  {
    id: 13,
    name: "Lightning Strike",
    price: 229,
    description: "Ultra-light for quick reactions",
    image: "https://media.istockphoto.com/id/1479014360/photo/modern-generic-brand-cricket-bat.jpg?s=612x612&w=0&k=20&c=gWh9EpwfUb4WvjBGvb-Iato1YOdS6Kf9XX030029LC0="
  },
  {
    id: 14,
    name: "Defensive Master",
    price: 199,
    description: "Perfect for defensive players",
    image: "https://media.istockphoto.com/id/493868298/photo/close-up-of-a-cricket-bat.jpg?s=612x612&w=0&k=20&c=bWtWaG6HUDJQ1yACtWY_FRgtH1rz5HMrPD4hrgr3aGI="
  },
  {
    id: 15,
    name: "All-Rounder",
    price: 279,
    description: "Balanced for all playing styles",
    image: "https://media.istockphoto.com/id/1479014360/photo/modern-generic-brand-cricket-bat.jpg?s=612x612&w=0&k=20&c=gWh9EpwfUb4WvjBGvb-Iato1YOdS6Kf9XX030029LC0="
  },
  {
    id: 16,
    name: "Signature Series",
    price: 399,
    description: "Limited edition signed by pros",
    image: "https://media.istockphoto.com/id/1306078671/photo/cricket-bat-and-ball-place-on-cricket-ground-green-grass.jpg?s=612x612&w=0&k=20&c=pxmLTFehFUqtopSBZce0aCncNvpLQIg4et1tRloqalI="
  },
  {
    id: 17,
    name: "T20 Blaster",
    price: 249,
    description: "Optimized for short formats",
    image: "https://media.istockphoto.com/id/493868350/photo/close-up-of-a-cricket-bat.jpg?s=612x612&w=0&k=20&c=Tp9Eij9QagUOlXwDmJtlvZCKoosXyOH2z8nn-SeXclM="
  },
  {
    id: 18,
    name: "Test Match Pro",
    price: 329,
    description: "For the long game specialists",
    image: "https://media.istockphoto.com/id/535985843/photo/cricket-bat-and-ball.jpg?s=612x612&w=0&k=20&c=pF0L5BIrFGJR0LghRUUrWqiBjaBbUgdKoIITe7XrLBE="
  },
  {
    id: 19,
    name: "Women's Elite",
    price: 219,
    description: "Designed for women cricketers",
    image: "https://media.istockphoto.com/id/493868244/photo/close-up-of-a-cricket-ball-with-a-bat.jpg?s=612x612&w=0&k=20&c=GYmB99ZSmmYCgkwbSFKqbXQSPcctNR2POuCYjUYNeBM="
  },
  {
    id: 20,
    name: "Legends Edition",
    price: 459,
    description: "Collector's item with premium finish",
    image: "https://media.istockphoto.com/id/1479015492/photo/cricket-bats-on-shelving-rack.webp?a=1&b=1&s=612x612&w=0&k=20&c=nJ3YkpNz4pCEAGE0sqGLwbp3XyF8yLokQZCUA1mgMmE="
  }
];

const Products = () => {
  const [showAllProducts, setShowAllProducts] = useState(false);
  const initialProducts = allProducts.slice(0, 8);
  const displayedProducts = showAllProducts ? allProducts : initialProducts;

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Explore Our Cricket Bats</h2>
          <p className="text-gray-600 mt-2">Crafted for champions, built to perform.</p>
        </div>

        {/* Grid View Only */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {displayedProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">${product.price}</span>
                  <button className="flex items-center bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded transition">
                    <FiShoppingCart className="mr-2" /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button - Only show if not already showing all */}
        {!showAllProducts && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAllProducts(true)}
              className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded transition"
            >
              View All Products ({allProducts.length})
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
const products = [
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
  {
    id: 3,
    name: "Club Champion",
    price: 149,
    description: "Ideal for club cricketers",
    image: "https://media.istockphoto.com/id/1306078671/photo/cricket-bat-and-ball-place-on-cricket-ground-green-grass.jpg?s=612x612&w=0&k=20&c=pxmLTFehFUqtopSBZce0aCncNvpLQIg4et1tRloqalI="
  },
  {
    id: 4,
    name: "Junior Pro",
    price: 99,
    description: "Designed for young aspiring players",
    image: "https://media.istockphoto.com/id/493868350/photo/close-up-of-a-cricket-bat.jpg?s=612x612&w=0&k=20&c=Tp9Eij9QagUOlXwDmJtlvZCKoosXyOH2z8nn-SeXclM="
  },
  {
    id: 5,
    name: "Limited Edition",
    price: 399,
    description: "Exclusive hand-signed collector's item",
    image: "https://media.istockphoto.com/id/535985843/photo/cricket-bat-and-ball.jpg?s=612x612&w=0&k=20&c=pF0L5BIrFGJR0LghRUUrWqiBjaBbUgdKoIITe7XrLBE="
  },
  {
    id: 6,
    name: "T20 Power",
    price: 249,
    description: "Optimized for explosive hitting",
    image: "https://media.istockphoto.com/id/493868244/photo/close-up-of-a-cricket-ball-with-a-bat.jpg?s=612x612&w=0&k=20&c=GYmB99ZSmmYCgkwbSFKqbXQSPcctNR2POuCYjUYNeBM="
  }
];



const Products = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Cricket Bats</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">£{product.price}</span>
                <button className="bg-amber-500 hover:bg-amber-600 text-black font-medium py-2 px-4 rounded transition">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
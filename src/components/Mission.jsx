// components/Mission.jsx
const Mission = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">OUR MISSION</h1>
          <h2 className="text-2xl md:text-3xl font-light text-amber-600 mb-6">Where Tradition Meets Innovation</h2>
        </div>
        
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg">
          <div className="my-6">
            <blockquote className="text-xl md:text-2xl italic text-gray-700 px-4 md:px-8 py-4 leading-relaxed max-w-4xl mx-auto">
              "At XYZ, we honor centuries of bat-making heritage while embracing modern engineering to create cricket bats that offer the perfect balance of power, precision, and playability for professionals and enthusiasts alike."
            </blockquote>
          </div>

          <div className="flex flex-col items-center mt-8 space-y-3">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-100 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" 
                alt="Founder XYZ"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <p className="text-md font-bold text-gray-900">XYZ</p>
              <p className="text-gray-600 text-xs uppercase tracking-wider">Founder & Master Craftsman</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
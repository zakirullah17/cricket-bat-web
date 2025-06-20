const steps = [
  {
    title: "Wood Selection",
    description: "We source only the finest English willow from sustainable forests. Each cleft is inspected for grain structure and density.",
    icon: "🌳"
  },
  {
    title: "Shaping",
    description: "Our master craftsmen shape the bat using traditional tools, creating the perfect profile for balance and performance.",
    icon: "🪓"
  },
  {
    title: "Pressing",
    description: "The bat undergoes a specialized pressing process to compress the fibers, enhancing durability and power.",
    icon: "🏋️"
  },
  {
    title: "Handle Fitting",
    description: "Premium Sarawak cane handles are fitted with rubber grips for optimal shock absorption and comfort.",
    icon: "✋"
  },
  {
    title: "Finishing",
    description: "The bat is sanded to a smooth finish and treated with a protective coating to preserve the wood.",
    icon: "✨"
  },
  {
    title: "Quality Control",
    description: "Every bat is rigorously tested for weight, balance, and performance before leaving our workshop.",
    icon: "🔍"
  }
];

const BuildProduct = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">How We Craft Our Bats</h1>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 h-full w-1 bg-amber-500 transform -translate-x-1/2"></div>
        
        {/* Steps */}
        <div className="space-y-12 md:space-y-0">
          {steps.map((step, index) => (
            <div key={index} className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
              {/* Step content */}
              <div className={`md:w-1/2 p-6 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
              
              {/* Step number (mobile) */}
              <div className="md:hidden absolute -top-6 left-0 bg-amber-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold">
                {index + 1}
              </div>
              
              {/* Step number (desktop) */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-amber-500 text-white rounded-full h-12 w-12 items-center justify-center font-bold text-xl">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildProduct;
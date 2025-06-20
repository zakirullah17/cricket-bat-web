// components/About.jsx
const About = () => {
  return (

    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkw2ebqODFjX8Ba7NSSlkcaAk9_aq8GQm0Ag&s" 
              alt="Crafting cricket bats"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Our Craftsmanship</h2>
            <p className="text-gray-600 mb-6">
              Each XYZ bat undergoes 147 meticulous steps from wood selection to final polish. Our master craftsmen with 20+ years experience shape every bat using time-honored techniques combined with modern performance insights.
            </p>
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded transition duration-300">
              How We Make Our Bats
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
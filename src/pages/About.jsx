const team = [
  {
    name: "James Willow",
    role: "Master Bat Maker",
    bio: "With over 40 years of experience, James is our most senior craftsman who oversees all production.",
    image: "https://via.placeholder.com/200x200?text=James+Willow"
  },
  {
    name: "Sarah Maple",
    role: "Design Specialist",
    bio: "Sarah combines modern design with traditional techniques to create our most innovative bats.",
    image: "https://via.placeholder.com/200x200?text=Sarah+Maple"
  },
  {
    name: "Robert Ash",
    role: "Quality Control",
    bio: "Robert ensures every bat meets our exacting standards before it leaves the workshop.",
    image: "https://via.placeholder.com/200x200?text=Robert+Ash"
  }
];

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">About Cricket Bat Company</h1>
      
      <section className="mb-16">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 1985 in a small workshop in Batford, England, Cricket Bat Company began with a simple mission: to create the finest cricket bats using traditional craftsmanship combined with modern performance insights.
          </p>
          <p className="text-gray-700 mb-4">
            What started as a one-man operation has grown into a respected name in cricket equipment, though we've never lost sight of our roots. Every bat we make still receives the same individual attention and care as those first bats did nearly 40 years ago.
          </p>
          <p className="text-gray-700">
            Today, our bats are used by players at all levels, from school teams to international professionals who appreciate the perfect balance of power and precision that only handcrafted bats can provide.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-8 text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-amber-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
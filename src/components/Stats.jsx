// components/Stats.jsx
export default function Stats() {
  const stats = [
    { value: "25+", label: "Years Experience" },
    { value: "10k+", label: "Happy Customers" },
    { value: "100%", label: "Satisfaction Guarantee" },
    { value: "500+", label: "Unique Designs" }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <p className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</p>
              <p className="text-gray-600 uppercase text-sm tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
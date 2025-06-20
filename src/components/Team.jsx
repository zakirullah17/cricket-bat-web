// components/Team.jsx
export default function Team() {
  const teamMembers = [
    {
      name: "Alex Morgan",
      role: "Founder & Master Craftsman",
      bio: "With over 25 years of woodworking experience, Alex leads our team with unparalleled expertise.",
      image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Jamie Chen",
      role: "Design Director",
      bio: "Jamie brings a modern aesthetic to our traditional techniques, creating timeless yet contemporary designs.",
      image: "https://media.istockphoto.com/id/1626178861/photo/happy-handsome-young-business-man-looking-at-camera-in-office-headshot-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=tJqkNr1fEBlNbHWLLSmm3hDWqQENlNP_POHyoPphWp4="
    },
    {
      name: "Taylor Williams",
      role: "Production Manager",
      bio: "Taylor ensures every piece meets our exacting standards before it leaves the workshop.",
      image: "https://media.istockphoto.com/id/2194078950/photo/profile-picture-of-smiling-confident-arabic-businessman.webp?a=1&b=1&s=612x612&w=0&k=20&c=42Z7FDi1u5Ogevtd0xMUkTWM7hDzrre4YOlbHKvK_T8="
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our skilled artisans combine passion with precision to create exceptional pieces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-primary-600 mb-3">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
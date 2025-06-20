import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your message, ${formData.name}! We'll get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 px-6 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="text-amber-500 text-2xl mr-4">📍</div>
              <div>
                <h3 className="text-lg font-medium">Address</h3>
                <p className="text-gray-600">123 Willow Lane, Batford, BF1 2CD, UK</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-amber-500 text-2xl mr-4">📞</div>
              <div>
                <h3 className="text-lg font-medium">Phone</h3>
                <p className="text-gray-600">+44 1234 567890</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-amber-500 text-2xl mr-4">✉️</div>
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="text-gray-600">info@cricketbatco.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-amber-500 text-2xl mr-4">🕒</div>
              <div>
                <h3 className="text-lg font-medium">Working Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
                <p className="text-gray-600">Saturday: 10am - 2pm</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
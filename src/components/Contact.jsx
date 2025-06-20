// components/Contact.jsx
import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';

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
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          <p className="text-gray-600 mt-2">Have questions? Get in touch with our team.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
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
              <div className="mb-6">
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
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6">Our Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-amber-500 mt-1 mr-4">
                  <FiMapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Address</h4>
                  <p className="text-gray-600">123 Willow Lane, Batford, BF1 2CD, UK</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-amber-500 mt-1 mr-4">
                  <FiPhone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Phone</h4>
                  <p className="text-gray-600">+44 1234 567890</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-amber-500 mt-1 mr-4">
                  <FiMail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <p className="text-gray-600">info@xyzbats.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-amber-500 mt-1 mr-4">
                  <FiClock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Working Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
                  <p className="text-gray-600">Saturday: 10am - 2pm</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
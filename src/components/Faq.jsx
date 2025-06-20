// components/FAQ.jsx
import { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What materials do you use in your products?",
      answer: "We use only the highest quality, sustainably sourced materials including solid hardwoods, premium metals, and eco-friendly finishes."
    },
    {
      question: "How long does shipping take?",
      answer: "Most items ship within 3-5 business days. Delivery times vary by location but typically range from 2-10 business days after shipping."
    },
    {
      question: "Do you offer custom orders?",
      answer: "Yes, we love creating custom pieces! Contact us with your ideas and we'll work with you to bring your vision to life."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unused items in their original condition. Custom items are final sale."
    },
    {
      question: "How do I care for my furniture?",
      answer: "We provide care instructions with each product. Generally, we recommend regular dusting and avoiding direct sunlight or extreme humidity."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-200">
              <button
                className="flex justify-between items-center w-full py-4 text-left font-medium"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${activeIndex === index ? 'transform rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-40 pb-4' : 'max-h-0'}`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { useState } from 'react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      title: "Shipping timeline",
      content: "All orders are processed within 24 hours. Standard shipping typically takes 3-5 business days across India. You will receive a tracking link via email once your kit is dispatched."
    },
    {
      title: "Returns policy",
      content: "We offer a 7-day return policy for unused, unopened kits in their original packaging. Please contact our support team to initiate a return."
    },
    {
      title: "COD availability",
      content: "Yes! Cash on Delivery (COD) is available for most pin codes across India. You can select this option during checkout."
    },
    {
      title: "Age selection help",
      content: "Our kits are precisely mapped to a child's developmental milestones. If your child is between ages (e.g., 2.5 years old), we recommend choosing the 2-3 Years Kit to ensure they master foundational skills."
    },
    {
      title: "Safety standards",
      content: "Safety is our top priority. All physical materials included in Heart & Bloom kits are non-toxic, child-safe, and thoroughly tested to meet strict safety standards."
    },
    {
      title: "Replacement policy",
      content: "If you receive a damaged item or if something is missing from your kit, please notify us within 48 hours of delivery. We will ship a free replacement for the specific part immediately."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-20 min-h-[70vh]">
      <h1 className="text-4xl font-bold text-brand mb-12 text-center">General FAQ & Policies</h1>
      
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-xl bg-white overflow-hidden shadow-sm">
            <button 
              className="w-full text-left px-6 py-5 font-bold text-lg text-brand flex justify-between items-center hover:bg-gray-50 transition"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.title}
              <span className="text-gray-400 text-2xl">{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                {faq.content}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center p-6 bg-brand text-white rounded-2xl">
        <h3 className="text-xl font-bold mb-2">Still need help?</h3>
        <p className="mb-4 text-gray-300">Our support team is always ready to assist you.</p>
        <a href="/contact" className="inline-block bg-white text-brand px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">Contact Support</a>
      </div>
    </div>
  );
}
import { Mail, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-brand mb-4 text-center">Contact Us</h1>
        <p className="text-gray-600 text-center mb-12">Have questions about our developmental kits? We're here to help.</p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="bg-brand text-white p-3 rounded-full">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-brand mb-1">Email Us</h3>
                <a href="mailto:support@heartandbloom.in" className="text-gray-600 hover:text-brand transition">support@heartandbloom.in</a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="bg-green-500 text-white p-3 rounded-full">
                <MessageCircle size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-brand mb-1">WhatsApp Support</h3>
                <a href="#" className="text-gray-600 hover:text-green-600 transition">Click here to chat with us</a>
                <p className="text-sm text-gray-400 mt-1">(Mon-Fri, 9AM - 6PM)</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-2xl text-brand mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-brand" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-brand" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows="4" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-brand" placeholder="How can we help?"></textarea>
              </div>
              <button type="submit" className="w-full bg-brand text-white py-3 rounded-lg font-medium flex justify-center items-center gap-2 hover:bg-gray-800 transition">
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
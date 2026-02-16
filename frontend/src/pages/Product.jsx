import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, PlusCircle, Users, Brain, ListChecks, Truck, ArrowRight } from 'lucide-react';
import axios from 'axios';

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on load
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <div className="text-center py-20 text-xl">Loading kit...</div>;

  const faqs = [
    { q: "Is this a toy?", a: "No. It’s a structured developmental kit." },
    { q: "Do I need to prepare anything?", a: "Most materials are included. Minimal household items like water are required." },
    { q: "How long does each activity take?", a: "15–30 minutes." },
    { q: "Is it safe?", a: "All materials are age-appropriate and child-safe." }
  ];

  return (
    <div className="bg-white pb-20 md:pb-0">
      {/* ABOVE THE FOLD: Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="bg-gray-100 rounded-2xl overflow-hidden sticky top-24">
              <img src={product.image} alt="Heart & Bloom Development Kit" className="w-full aspect-square object-cover" />
            </div>
          </div>

          {/* Buy Box */}
          <div className="w-full md:w-1/2">
            <span className="text-sm font-semibold tracking-wider text-gray-500 uppercase">{product.ageGroup}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-brand mt-2 mb-4">Heart & Bloom – {product.ageGroup} Development Kit</h1>
            <p className="text-2xl font-medium text-gray-900 mb-6">₹5,500</p>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-8 border-b border-gray-200 pb-8">
              A complete 1-year developmental kit with 50 guided activities designed specifically for children aged {product.ageGroup}.
            </p>

            {/* Desktop Add to Cart */}
            <div className="hidden md:block">
              <button className="w-full bg-brand text-white py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition shadow-lg mb-4">
                Add to Cart — ₹5,500
              </button>
              {/* BONUS: Delivery Microcopy */}
              <div className="flex items-center justify-center gap-6 text-sm text-gray-600 mb-8">
                <span className="flex items-center gap-1"><Truck size={16}/> Free Shipping</span>
                <span className="flex items-center gap-1"><CheckCircle size={16}/> 7-Day Returns</span>
                <span className="flex items-center gap-1"><span className="font-bold">COD</span> Available</span>
              </div>
            </div>

            {/* What's Included Quick List */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h4 className="font-bold mb-4 text-brand flex items-center gap-2"><ListChecks size={20}/> What’s Included</h4>
              <ul className="space-y-3 text-sm text-gray-700 font-medium">
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-green-500"/> 50 activity cards</li>
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-green-500"/> Material kit</li>
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-green-500"/> 2 curated books</li>
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-green-500"/> Parent instruction guide</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* BELOW THE FOLD: Details & Trust */}
      <div className="border-t border-gray-200 bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          {/* What This Kit Builds */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-brand flex items-center gap-2"><Brain size={24}/> What This Kit Builds</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Fine & Gross Motor Skills</li>
              <li>• Language & Early Literacy</li>
              <li>• Cognitive Thinking</li>
              <li>• Emotional Regulation</li>
              <li>• Sensory Development</li>
              <li>• Creativity</li>
              <li>• Independence Skills</li>
              <li>• Moral & Social Awareness</li>
            </ul>
          </div>

          {/* How It Works */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-brand flex items-center gap-2"><PlusCircle size={24}/> How It Works</h3>
            <ol className="space-y-4 text-gray-700">
              <li className="flex gap-4"><span className="font-bold text-brand bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center shrink-0">1</span> Choose your child’s age</li>
              <li className="flex gap-4"><span className="font-bold text-brand bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center shrink-0">2</span> Follow 1 guided activity per week</li>
              <li className="flex gap-4"><span className="font-bold text-brand bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center shrink-0">3</span> Build skills while bonding together</li>
            </ol>
          </div>

          {/* Who Is It For */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-brand flex items-center gap-2"><Users size={24}/> Who Is It For?</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Parents of {product.ageGroup} olds</li>
              <li>• First-time parents</li>
              <li>• Working parents</li>
              <li>• Parents who want structured learning at home</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Product FAQ Accordion */}
      <div className="max-w-3xl mx-auto px-4 py-20 border-b border-gray-200">
        <h2 className="text-3xl font-bold text-center mb-10 text-brand">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg bg-white overflow-hidden">
              <button 
                className="w-full text-left px-6 py-4 font-semibold text-brand flex justify-between items-center hover:bg-gray-50"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                {faq.q}
                <span className="text-gray-400 text-xl">{openFaq === index ? '−' : '+'}</span>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* BONUS: Cross-Sell Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-brand mb-6">Explore Other Age Kits</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Because development never stops, we have expert-designed kits ready for every stage of your child's growth.</p>
        <Link to="/collection" className="inline-flex items-center gap-2 bg-white border-2 border-brand text-brand px-8 py-3 rounded-full font-bold hover:bg-brand hover:text-white transition">
          View All Kits <ArrowRight size={20} />
        </Link>
      </div>

      {/* BONUS: Sticky Add-to-Cart for Mobile Only */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200 z-[60] shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <div className="flex justify-between items-center mb-2">
           <span className="font-bold text-gray-900 truncate pr-2">{product.name}</span>
           <span className="font-bold text-brand">₹5,500</span>
        </div>
        <button className="w-full bg-brand text-white py-3 rounded-full font-bold text-lg hover:bg-gray-800 transition shadow-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
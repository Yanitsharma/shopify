import { Link } from 'react-router-dom';
import { Brain, CheckCircle, GraduationCap, LayoutList, Smile } from 'lucide-react';

const ages = ['0–1 Years', '1–2 Years', '2–3 Years', '3–4 Years', '4–5 Years', '5–6 Years', '6–7 Years', '7–8 Years', '8–9 Years', '9–10 Years'];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-accent px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-brand mb-6 leading-tight">
            Build Your Child’s Brain in the Years That Matter Most
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Expert-designed developmental activity kits for children 0–10 years. <br className="hidden md:block"/>
            50 guided activities. Zero guesswork for parents.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/collection" className="bg-brand text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-gray-800 transition">
              Shop by Age
            </Link>
            <button className="border-2 border-brand text-brand px-8 py-3 rounded-full font-medium text-lg hover:bg-brand hover:text-white transition">
              How It Works
            </button>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium text-gray-600">
            <div className="flex items-center gap-2"><Brain size={18} /> Neuroscience-backed</div>
            <div className="flex items-center gap-2"><CheckCircle size={18} /> Age-specific kits</div>
            <div className="flex items-center gap-2"><GraduationCap size={18} /> Designed by education experts</div>
            <div className="flex items-center gap-2"><LayoutList size={18} /> 50 guided activities</div>
            <div className="flex items-center gap-2"><Smile size={18} /> Parent-friendly & ready to use</div>
          </div>
        </div>
      </section>

      {/* Choose Your Child's Age */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-brand">Choose Your Child’s Age</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {ages.map((age, i) => (
            <Link key={i} to="/collection" className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-md hover:border-brand transition">
              <span className="font-semibold text-lg text-brand">{age}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Info Split Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-brand">What’s Inside Every Kit</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3"><CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20}/> 50 structured weekly activities</li>
              <li className="flex items-start gap-3"><CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20}/> Activity card booklet</li>
              <li className="flex items-start gap-3"><CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20}/> 2 age-appropriate books</li>
              <li className="flex items-start gap-3"><CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20}/> Skill-building tools & materials</li>
              <li className="flex items-start gap-3"><CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20}/> Parent guidance notes</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-brand">Why Heart & Bloom?</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-brand mt-2"></div> Designed by child development specialists</li>
              <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-brand mt-2"></div> Covers 8 developmental domains</li>
              <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-brand mt-2"></div> Encourages bonding time</li>
              <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-brand mt-2"></div> Builds real skills — not just play</li>
              <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-brand mt-2"></div> Easy for busy parents</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}
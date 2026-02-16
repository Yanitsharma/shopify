import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react'; // Added icon
import Home from './pages/Home';
import Collection from './pages/Collection';
import Product from './pages/Product';
import About from './pages/About';
import Faq from './pages/Faq';
import Contact from './pages/Contact'; // Imported Contact

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col relative">
        {/* Navigation */}
        <nav className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold tracking-tight text-brand">Heart & Bloom</Link>
            <div className="hidden md:flex space-x-6 text-sm font-medium">
              <Link to="/collection" className="hover:text-gray-600">All Kits</Link>
              <Link to="/about" className="hover:text-gray-600">About</Link>
              <Link to="/faq" className="hover:text-gray-600">FAQ</Link>
              <Link to="/contact" className="hover:text-gray-600">Contact</Link>
            </div>
            <button className="bg-brand text-white px-5 py-2 rounded-full text-sm font-medium hidden md:block">Cart (0)</button>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-brand text-white py-12 pb-24 md:pb-12 text-center text-sm mt-auto">
          <p>© {new Date().getFullYear()} Heart & Bloom. All rights reserved.</p>
        </footer>

        {/* BONUS: Global Floating WhatsApp Button */}
        <a href="#" className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition z-50 flex items-center justify-center">
          <MessageCircle size={28} />
        </a>
      </div>
    </Router>
  );
}

export default App;
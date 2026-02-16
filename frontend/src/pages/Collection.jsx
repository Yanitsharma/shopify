import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Collection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://shopify-jwe2.onrender.com/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-12">All Developmental Kits</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <Link to={`/product/${product._id}`} key={product._id} className="group">
            <div className="bg-gray-100 rounded-2xl overflow-hidden mb-4">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover group-hover:scale-105 transition duration-300" />
            </div>
            <h3 className="font-semibold text-lg text-brand">{product.name}</h3>
            <p className="text-gray-600 mt-1 font-medium">₹{product.price.toLocaleString()}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
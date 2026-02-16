const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./models/Product');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB (Replace with your connection string if using Atlas)
mongoose.connect('mongodb+srv://yanit:shiv12345@cluster0.qhrdc1p.mongodb.net/')
  .then(() => {
    console.log('Connected to MongoDB');
    seedDatabase();
  })
  .catch(err => console.error(err));

// --- API ROUTES ---

// Get all products (Kits)
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find().sort({ ageGroup: 1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single product
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// --- SEED SCRIPT ---
async function seedDatabase() {
  const count = await Product.countDocuments();
  if (count === 0) {
    const ageGroups = ['0–1 Years', '1–2 Years', '2–3 Years', '3–4 Years', '4–5 Years', '5–6 Years', '6–7 Years', '7–8 Years', '8–9 Years', '9–10 Years'];
    
    const productsToInsert = ageGroups.map(age => ({
      name: `Developmental Activity Kit (${age})`,
      ageGroup: age,
      price: 5500,
      description: "Expert-designed developmental activity kit. Includes 50 structured weekly activities, an activity card booklet, 2 age-appropriate books, skill-building tools, and parent guidance notes.",
      image: `https://placehold.co/600x600/e2e8f0/2d3748?text=Kit+${age.replace(' ', '+')}` // Placeholder image
    }));

    await Product.insertMany(productsToInsert);
    console.log('Database seeded with 10 Age Kits!');
  }
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
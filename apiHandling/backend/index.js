const express = require('express');
const app = express();
const PORT = 5000; 

// Sample products data
const products = [
  {
    id: 1,
    name: 'Wireless Mouse',
    price: 499,
    image: 'https://via.placeholder.com/150?text=Mouse',
  },
  {
    id: 2,
    name: 'Bluetooth Headphones',
    price: 1299,
    image: 'https://via.placeholder.com/150?text=Headphones',
  },
  {
    id: 3,
    name: 'Mechanical Keyboard',
    price: 2499,
    image: 'https://via.placeholder.com/150?text=Keyboard',
  },
  {
    id: 4,
    name: 'Gaming Monitor',
    price: 7999,
    image: 'https://via.placeholder.com/150?text=Monitor',
  },
  {
    id: 5,
    name: 'Webcam HD',
    price: 999,
    image: 'https://via.placeholder.com/150?text=Webcam',
  },
];

// API endpoint
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

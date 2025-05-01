import express from 'express'
const app = express();
const PORT = 3000; 


// API endpoint
app.get('/api/products', (req, res) => {
    const products = [
        {
          id: 1,
          name: 'Wereless Mouse',
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

      if(req.query.search){
        const filterProducts = products.filter(product =>
            product.name.includes(req.query.search))
        res.send(filterProducts)
        return;
      }
      setTimeout(() =>{
        res.json(products);
      },3000)
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

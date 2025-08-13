const express = require('express');
const app = express();
const PORT = 4000;
const routes = require('./Routes/foodRoutes');
app.use('/api/v1/food', routes);
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page');
});
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
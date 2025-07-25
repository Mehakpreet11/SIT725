const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware to parse JSON bodies (for POST requests)
app.use(express.json());
// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));
// In-memory array to store quotes
let quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Do not wait to strike till the iron is hot; but make it hot by striking."
];
// GET endpoint to retrieve a random quote
// Usage example: http://localhost:3000/api/quote
app.get('/api/quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json({ quote: quotes[randomIndex] });
});

app.get('/health', (req, res) => {
    res.json({ status: 'Server is up and running' });
});






app.get('/api/addTwoNumbers'  , (req, res) => {
    const number1 = parseFloat(req.query.a);
    const number2 = parseFloat(req.query.b);
    if (isNaN(number1) || isNaN(number2)) {
        return res.send("Error: Please provide valid numbers using query parameters 'a' and 'b'.");
    }
    const result = number1 + number2;
    res.send(`The sum of ${number1} and ${number2} is: ${result}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
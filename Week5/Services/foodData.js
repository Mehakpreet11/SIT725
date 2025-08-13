const express = require('express');
const foodItems = [
  { id: 1, name: 'Chicken', price: 12.99 },
  { id: 2, name: 'Pastries', price: 8.99 },
  { id: 3, name: 'Pasta', price: 10.99 }
];


module.exports = {
  getFoodItems: () => foodItems
};
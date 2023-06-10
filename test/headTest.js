// import head.js and assertEqual.js
const head = require('../head.js');
const assertEqual = require('../assertEqual');

//test cases
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

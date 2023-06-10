// importing tail and assertEqual
const tail = require('../head.js');
const assertEqual = require('../assertEqual');

//test case
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly =  require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const without = require('./without');
const takeUntil = require('./takeUntil');



module.exports = {
 head,
 tail,
 middle,
 assertArraysEqual,
 assertEqual,
 map,
 without,
 letterPositions,
 flatten,
 findKeyByValue,
 findKey,
 eqObjects,
 eqArrays,
 countLetters,
 assertObjectsEqual,
 countOnly,
 takeUntil
};
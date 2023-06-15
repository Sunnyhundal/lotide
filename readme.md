# Lotide
A mini clone of the [Lodash](https://lodash.com/) library.

## Purpose
BEWARE: This library was published for learning purposes. It is not intended for use in production-grade software.

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage
**Install it:**

`npm install @amandip.h/lotide`

**Require it:**

`const _ = require('@amandip.h/lotide')`;

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]/n`
`const flatArray = _.flatten ([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]`

The following functions are currently implemented:

* `head(array)`: "Returns the value of the first indices of the passed array.
* `tail(array)`: Returns a new array copy of the original array without the first element.
* `middle(array)`: Returns the middle value of an array with 3 elements. The function returns an empty array with arrays smaller than 3. Runction returns the two middle values of an array if it has as an even number of elements (but greater than 2).

* `assertArraysEqual(arrayOne, arrayTwo)`: Function compares two arrays to see if they are similar.
* `assertEqual(actual, expected)`: Function compares two datatypes to see if they are similar.
* `assertObjectsEqual(...)`: Function compares two objects to see if they are similar or not.
* `countLetters(...)`: Function take in string and returns a count of each of the letters in the string.
* `countOnly(allItems, itemsToCount)`: Function is passed an array and an object. It will return an object containing counts of everything that the input object listed
* `eqArrays(arrayOne, arrayTwo)`: Checks the equality between two arrays and returns true if equal and false if not equal.
* `eqObjects(object1, object2)`: Checks the equality between two objects and returns true if equal and false if not equal.
* `findKey(...)`: Function takes in an object and a callback. It s returns the first key for which the callback returns a true value. If no key is found, then it returns undefined.
* `findKeyByValue(...)`: function takes in an object and a value. It  returns the first key which contains the given value. If no key with that given value is found, then it returns undefined.
* `flatten(...)`: Returns an array after removing any nested arrays
* `letterPositions(...)`: Receives a string and returns an array with all the indexs of a selected letters position from original string.
* `map(...)`: Function takes in an array and a callback function, and returns a new array based on the results of the callback.
* `without(...)`: Function take in an array and a to remove value. It returns a new array with only those elements from the original array that were not marked for removal.

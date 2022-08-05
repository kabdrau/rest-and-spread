// Refactor filterOutOdds to use the rest operator & an arrow function

function filterOutOdds() {
	var nums = Array.prototype.slice.call(arguments);
	return nums.filter(function(num) {
		return num % 2 === 0
	});
  }

const filterOutOddsNew = (...args) => args.filter(arg => arg%2 === 0);

// findMin
function findMin(...args) {
	return args.reduce((min, curr) => min < curr ? min : curr)
}

// mergeObjects
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

// doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => ([...arr, ...args.map(arg => arg*2)])

//Slice and Dice
/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (...items) => {
	let id = Math.round(items.length * Math.random())-1;
	//console.log(id);
	//items.splice(id, 1);
	return [...items.slice(0, id), ...items.slice(id + 1)]
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
	return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
	let newObj = {...obj};
	newObj[key] = val;
	return newObj;  
}

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
	let newObj = {...obj};
	delete newObj[key];
	return newObj;
}

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
	return {...obj1, ...obj2};
}

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
	let newObj = {...obj};
	newObj[key] = val;
	return newObj;
}
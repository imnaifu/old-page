# JavsScript really has a lot good method for arrays.
let's take a look ~~

# Code:  
```
//data we worked with
const inventors = [
	{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
	{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
	{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
	{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
	{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
	{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
	{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
	{ first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
	{ first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
	{ first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
	{ first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
	{ first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig',
 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 
 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 
 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 
 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 
 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

const people2 = [
	{ name: 'Wes', year: 1988 },
	{ name: 'Kait', year: 1986 },
	{ name: 'Irv', year: 1970 },
	{ name: 'Lux', year: 2015 },
];

const comments = [
	{ text: 'Love this!', id: 523423 },
	{ text: 'Super good', id: 823423 },
	{ text: 'You are the best', id: 2039842 },
	{ text: 'Ramen is my fav food ever', id: 123523 },
	{ text: 'Nice Nice Nice!', id: 542328 }
];

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
```

## 1. Array.prototype.filter():
- return new array
- filter takes function apply each of element, if return true then remain, else remove
```
// Filter the list of inventors for those who were born in the 1500's
const q1 = inventors.filter(inventor => {
	return inventor.year >= 1500 && inventor.year <= 1599
});
```
## 2. Array.prototype.map():
- return new array
- map take function apply each of element, return new element
```
// Give us an array of the inventor first and last names
const m1 = inventors.map(inventor => {
	return `${inventor.first} ${inventor.last}`
});
```

## 3. Array.prototype.sort():
- return new array
- take function with 2 parameter 
	- 要a在前面， return negative number
	- 要b在前面， return positive number
```
// Sort the inventors by birthdate, oldest to youngest	
// pick a if < 0, else pick b
const s1 = inventors.sort((a,b) => {
	// console.log(a.year, b.year);
	return a.year > b.year ? -1 : 1 
});
```

## 4. Array.prototype.reduce():
- return value
- take function with 2 parameter, and an optional initial total
	- first total, must be returned every time, so can be used for next time
	- second the current value, manipulate with total
```
// How many years did all the inventors live?
const r1 = inventors.reduce((total, each) => {
	return total += each.passed - each.year;
}, 0)
```

## 5. Array.prototype.some():
- return boolean
- take function apply to each of the element
	- if one of them return true, then return true
	- else return false
```
// is at least one person 19?
const q9 = people2.some(each => {
	return 2017 - each.year > 109
});
```
## 6. Array.prototype.every():
- return boolean
- like `some()`
	- only return true if all return true
	- else return false
```
// is everyone 19?
const q10 = people2.every(each => {
	return 2017 - each.year > 19
});
```
## 7. Array.prototype.find():
- return one element 
- take function apply to each element, return the one match
```
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const q11 = comments.find(each => {
	return each.id === 823423;
});
```
## 8. Array.prototype.findIndex():
- return number 
- take function apply to each element, return the index of the match one
```
// Find the comment with this ID
const q12 = comments.findIndex(each => {
	return each.id === 823423;
});
```

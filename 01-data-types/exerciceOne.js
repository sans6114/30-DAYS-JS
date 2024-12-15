/* 
    EJERCICIOS:
    Level 1
    1- Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
    2- Print the string on the browser console using console.log()
    3- Print the length of the string on the browser console using console.log()
    4- Change all the string characters to capital letters using toUpperCase() method
    5- Change all the string characters to lowercase letters using toLowerCase() method
    6- Cut (slice) out the first word of the string using substr() or substring() method
    7- Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
    8- Check if the string contains a word Script using includes() method
    9- Split the string into an array using split() method
    10- Split the string 30 Days Of JavaScript at the space using split() method
    11- 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
    12- Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
    13- What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
    14- What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
    15- Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
    Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
    16- Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
    17- Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
    18- Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
    19- Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
    20-Use startsWith() method with the string 30 Days Of JavaScript and make the result true
    21- Use endsWith() method with the string 30 Days Of JavaScript and make the result true
    22- Use match() method to find all the a’s in 30 Days Of JavaScript
    23- Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
    24- Use repeat() method to print 30 Days Of JavaScript 2 times
*/


// 1
let challenge = '30 Days Of JavaScript';

// 2
console.log(challenge);

// 3
console.log("Longitud de la cadena:", challenge.length);

// 4
let upperCaseChallenge = challenge.toUpperCase();
console.log("En mayúsculas:", upperCaseChallenge);

// 5
let lowerCaseChallenge = challenge.toLowerCase();
console.log("En minúsculas:", lowerCaseChallenge);

// 6
let firstWord = challenge.substr(0, 2);
console.log("Primera palabra:", firstWord);

// 7
let slicedPhrase = challenge.substring(3);
console.log("Frase sin '30':", slicedPhrase);

// 8
let containsScript = challenge.includes('Script');
console.log("Contiene 'Script'? :", containsScript);

// 9
let challengeArray = challenge.split(' ');
console.log("Cadena dividida en arreglo:", challengeArray);

// 10
let challengeSplit = challenge.split(' ');
console.log("Cadena dividida en arreglo por espacio:", challengeSplit);

// 11
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let companiesArray = companies.split(', ');
console.log("Arreglo de empresas:", companiesArray);

// 12
let pythonChallenge = challenge.replace('JavaScript', 'Python');
console.log("Nuevo reto:", pythonChallenge);

//13
let letterOnIndex = challenge.charAt(15);
console.log(letterOnIndex)

//14
let letterJ = challenge.charCodeAt('J');
console.log(letterJ)

//15
let firstOcurrense = challenge.lastIndexOf('a')
console.log(firstOcurrense)

//16
let phrase = 'You cannot end a sentence with because because because is a conjunction'
console.log(`first ocurrense of "because" in the string was on ${phrase.indexOf('because')}`)
//17
console.log(`last ocurrense of "because" in the string was on ${phrase.lastIndexOf('because')}`)
//18
console.log(`using "search" method for word "because" in the string. Result: ${phrase.search('because')}`)

//19
let phraseTwo = ' 30 Days Of JavaScript '
console.log(`Phrase twot withput spaces with "trim()" method: ${phraseTwo.trim()}`)
//20
console.log(`is true the fact that the variable starts with " 30"? ${phraseTwo.startsWith(' 30')}`)
//21
console.log(`is true the fact that the variable finish with "JavaScript "? ${phraseTwo.endsWith('JavaScript ')}`)

//22
const arrayOfA = phraseTwo.match(/a/g)
console.log(`there are ${arrayOfA.length} "a"`)
//23
const stringOne = '30 days of'
const stringTwo = 'JavaScript'
const phraseNew = stringOne.concat(' ',stringTwo)

console.log(phraseNew)

//24
console.log(phraseNew.repeat(2))

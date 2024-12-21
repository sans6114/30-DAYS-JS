//exercice 02
//1-Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
import { countries } from './countries.js';
import { webTechs } from './webTechs.js';

console.log(countries)
console.log(webTechs)

//2-First remove all the punctuations and change the string to array and count the number of words in the array
let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text = text.replaceAll(/[.,]/g, '')
console.log(text)
text = text.split(' ')
console.log(text.length)
//3-In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//add
const addToArr = (arr, word) => {
    arr.push(word)
    return arr
}
console.log(addToArr(shoppingCart, 'new food'))
//remove
const removeFromArr = (arr, word) => {
    const arrCopy = arr.filter(e => e !== word)
    return arrCopy
}
console.log(removeFromArr(shoppingCart, 'meat'))
console.log(shoppingCart)
//edit
const editFromArr = (arr, word, newWord) => {
    const arrCopy = arr.slice()
    const indexOfElement = arrCopy.findIndex(e => e === word)
    if (indexOfElement >= 0) {
        arrCopy[indexOfElement] = newWord
        return arrCopy
    }
}
const otherArr = editFromArr(shoppingCart, 'Coffee', 'other')
console.log(otherArr)
//is 'meat' in the array?
const indexOfMeat = shoppingCart.findIndex(e => e === 'meat')
if (indexOfMeat >= 0) {
    console.log('meat is already in the array', shoppingCart)
} else {
    shoppingCart.unshift('meat')
    console.log('meat added!', shoppingCart)
}
//add sugar to final
const hasSugar = shoppingCart.includes('sugar')
if (!hasSugar) {
    shoppingCart.push('sugar')
    console.log('you dont forgget the sugar please!', shoppingCart)
}
// eliminate honey
const withoutHoney = shoppingCart.filter(e => e !== 'Honey')
console.log(withoutHoney)

const changeWords = (arr, word) => {
    return arr.map(e => {
        if (e === 'Tea') {
            e = word
        }
        return e
    })

}
console.log(changeWords(shoppingCart, 'Green Tea'))

const ethiopia = (arr,word) => {
    const indexOfMeat = arr.findIndex(e => e === word)
    if(indexOfMeat >= 0){
    arr[indexOfMeat] = word.toUpperCase()
    }else{
        arr.push(word)
    }
    return arr
}
console.log(ethiopia(countries,'ethiopia'))
//9-In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const sass = webTechs.includes('Sass')
if(sass){
    console.log('Sass is a CSS preprocess')
}else{
    webTechs.push('Sass')
    console.log(webTechs)
}
//10-Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

//exercice 3
const ages = [19, 22, 16, 24, 20, 25, 26, 24, 25, 24]
//sort the array
console.log(ages.sort())
//find the min and max age
console.log(ages[0], ages[ages.length - 1])
//find the median age(one middle item or two middle items divided by two)
const middle = Math.floor(ages.length / 2)
console.log(ages[middle])
//find the average age
const findAverage = (arr) => {
    const totalAges = arr.reduce((acumulador, valorActual) => {
        return acumulador + valorActual
    },0)
    return Math.floor(totalAges / arr.length)
}
console.log(findAverage(ages))

const minAge = Math.min(...ages)
const maxAge = Math.max(...ages)
console.log(`the range of the ages: ${minAge} - ${maxAge}`)


//1:CHECK
let firstName = 'Santiago';
let lastName = 'Sosa';
let country = 'Argentina';
let city = 'La Plata';
let age = 18;
let isMarried = false;
let year = new Date().getFullYear()

console.log(typeof (firstName))//string
console.log(typeof (lastName))//string
console.log(typeof (country))//string
console.log(typeof (city))//string
console.log(typeof (age))//number
console.log(typeof (isMarried))//boolean
console.log(typeof (year))//number


console.log('10' === 10) //false
console.log(parseInt('9,8') === 10) //false because parseInt rounded for less number, in this case 9
console.log(typeof (Boolean))//functiom

//true sentences
console.log(5 > 2)
console.log(typeof (firstName) === 'string')// no keysensitive
console.log(2 >= 2)
//false sentences
console.log(10 < 6)
console.log(4 * 2 === 10)
console.log(typeof (isMarried) === 'number')

/*
4 > 3 -> true
4 >= 3 -> true
4 < 3 -> false
4 <= 3 -> false
4 == 4 -> true
4 === 4 -> true
4 != 4 -> false
4 !== 4 -> false
4 != '4' -> false
4 == '4' -> true
4 === '4' -> false
*/

console.log(4 > 3);   // true
console.log(4 >= 3);  // true
console.log(4 < 3);   // false
console.log(4 <= 3);  // false
console.log(4 == 4);  // true
console.log(4 === 4); // true
console.log(4 != 4);  // false
console.log(4 !== 4); // false
console.log(4 != '4'); // false
console.log(4 == '4'); // true
console.log(4 === '4'); // false

const phyton = 'phyton'
const jargon = 'jargon'

console.log(phyton.length)
console.log(jargon.length)
console.log(phyton.charAt(2) === jargon.charAt(2))

/*
4 > 3 && 10 < 12 -> true
4 > 3 && 10 > 12 -> false
4 > 3 || 10 < 12 -> true
4 > 3 || 10 > 12 -> true
!(4 > 3) -> false
!(4 < 3) -> true
!(false) -> true
!(4 > 3 && 10 < 12) -> false
!(4 > 3 && 10 > 12) -> true
!(4 === '4') -> true
*/

console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!(false)); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4')); // true


const isOn = (str, strTwo) => {
    let on = 'on'
    return (str && strTwo).includes(on) ? true : false
}
console.log(isOn(phyton, jargon))

const time = new Date()
console.log(`this year is: ${time.getFullYear()}`)
console.log(`this month is: ${time.getMonth()}`)
console.log(`this day is: ${time.getDate()}`)
console.log(`this hour is: ${time.getHours()}`)
console.log(`this minutes is: ${time.getMinutes()}`)
console.log(`this is the number of miliseconds passed since 1970, ${time.getTime()}`)

const baseAndHeight = () => {
    const base = prompt('what is the base of your triangle?')
    const height = prompt('what is the high of your triangle?')
    return {
        base,
        height
    }
}

const areaTriangule = () => {
    const { base, height } = baseAndHeight()
    if (isNaN(Number(base)) || isNaN(Number(height))) {
        alert('you have to use numbers')
        return areaTriangule()
    }
    // to that point you have the two numbers, base and height
    const finalBase = Number(base)
    const finalHeight = Number(height)
    const result = ((finalBase * finalHeight) / 2)
    return result
}
//this return a string, and its wrong
console.log(`the area of your triangle: ${areaTriangule()}`)


function defineSides() {
    const sideA = prompt('Cuanto mide tu lado A?')
    const sideB = prompt('Cuanto mide tu lado B?')
    const sideC = prompt('Cuanto mide tu lado C?')
    return {
        sideA,
        sideB,
        sideC
    }
}
const perimeterOfTriangle = () => {
    const { sideA, sideB, sideC } = defineSides()
    if (isNaN(Number(sideA)) || isNaN(Number(sideB)) || isNaN(Number(sideC))) {
        alert('you have to use numbers')
        return perimeterOfTriangle()
    }
    const perimeter = Number(sideA) + Number(sideB) + Number(sideC)
    return perimeter
}
console.log(perimeterOfTriangle())


//area of a rectangle: width * height
//perimeter of a rectangle: 2 * (width + height)

const defineAreaAndPerimeterRectangle = () => {
    let width = prompt('what is the width of your rectangle?')
    let height = prompt('what is the height of your rectangle?')
    if(isNaN(Number(width)) || isNaN(Number(height))){
        alert('you have to use numbers')
        return defineAreaAndPerimeterRectangle()
    }
    width = Number(width)
    height = Number(height)
    const area = width * height
    const perimeter = 2 * (width + height)
    return {
        area,
        perimeter
    }
}

console.log(defineAreaAndPerimeterRectangle())

const defineRedius = () => {
    let radius = prompt('what is the radius of your circle?')
    if(isNaN(Number(radius))){
        alert('you have to use numbers')
        return defineRedius()
    }
    radius = Number(radius)
    const area = Math.PI * radius * radius
    const circunference = 2 * Math.PI * radius
    return {
        area,
        circunference
    }
}

//1-Declare an empty array
const arr = []
const arrTwo = new Array()
console.log(arr)
console.log(arrTwo)
//2-Declare an array with more than 5 number of elements
const arrThree = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arrThree)
//3-Find the length of your array
const arrThreeLength = arrThree.length
console.log(arrThreeLength)
//4-Get the first item, the middle item and the last item of the array
console.log(arrThree[0])
console.log(arrThree[arrThreeLength - 1])
console.log(arrThree[Math.floor(arrThreeLength / 2)])
//5-Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
    1,
    'hola mundo',
    true,
    {
        user: 'santiago',
        age: 18
    },
    [1, 2, 3],
]
//6-Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
//7-Print the array using console.log()
console.log(companies)
//8-Print the number of companies in the array
console.log(companies.length)
//9-Print the first company, middle and last company
console.log(`the first company of the array is: ${companies[0]}`)
console.log(`the middle company of the array is: ${companies[Math.floor(companies.length / 2)]}`)
console.log(`the final company of the array is: ${companies[companies.length - 1]}`)
//10-print out all companies
const printArray = (array) => {
    return array.forEach(element => {
        console.log(element)
    });
}
printArray(companies)
//11-Change each company name to uppercase one by one and print them out
const printWithUpper = (arr) => {
    return arr.map(e => (
        e.toUpperCase()
    ))
}
console.log(printWithUpper(companies))
//12-Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${companies.join(', ')} are big IT companies.`)
//13-Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const findByName = (array,name) => {
    const element = array.find(element => element === name)
    if(!element) return 'This name not exist in the array'
    return `Yea! the name is in the string: ${element}, index: ${array.indexOf(element)}`
}
console.log(findByName(companies, 'Facebook'))
//14-Filter out companies which have more than one 'o' without the filter method
const filterArr = (array) => {
    const withO = []
    array.forEach(element => {
        let contador = 0;
        element = element.split('')
        for (const letter of element) {
            letter === 'o'
            ? contador++
            : null
        }
        if(contador > 1){
            element = element.join('')
            withO.push(element)
        }
    });
    return withO
}
console.log(filterArr(companies))
//15-sort the array
console.log(companies.sort())
//16-reverse de array
console.log(companies.reverse())
//17-slice out the first 3 companies
const sliceCompanies = companies.slice(3, companies.length)
console.log(companies, sliceCompanies)
//18-Slice out the last 3 companies from the array
console.log(companies)
const spliceCompanies = companies.splice(-3)
console.log(companies, spliceCompanies)
//19-Slice out the middle IT company or companies from the array
console.log(companies.splice(Math.floor(companies.length / 2), 1), companies)
//20-Remove the first IT company from the array
companies.shift()
console.log(companies)
//22-Remove the last IT company from the array
companies.pop()
console.log(companies)
//23-Remove all IT companies
companies.push(['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'])
console.log(companies)
companies.length = 0;
console.log(companies)
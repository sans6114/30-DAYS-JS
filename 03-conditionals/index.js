/*
1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
*/

const validateIsNumber = (number, callback) => {
    if (isNaN(Number(number))) {
        alert('please enter the correct type of value')
        callback()
        return false
    } else {
        return true
    }
}


const definePermision = () => {
    let age = prompt('Enter your age: ')
    if (!validateIsNumber(age, definePermision)) return
    const response = age >= 18
        ? 'You are old enough to drive'
        : 18 - Number(age)
    if (typeof (response) !== 'string') {
        return `Yoe are left with ${response} years to drive`
    }
    return response
}
console.log(definePermision())
/*
2.Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
*/
const defineDiference = () => {
    let age = prompt('Enter your age: ')
    const myAge = 25
    const valid = validateIsNumber(age, defineDiference)
    if (!valid) return
    if (age === myAge) {
        return 'You have my age!'
    } else if (age > myAge) {
        return `You are older ${age - myAge} years than me!`
    } else {
        return `You are younger ${myAge - age} years than me!`
    }
}
console.log(defineDiference())
/*
3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
*/

let a = 4
let b = 3


const compare = (a, b) => {
    return a > b
        ? 'a is greater than b'
        : 'a is less than b'
}

const compareTwo = (a, b) => {
    if (a > b) {
        return 'a is greater than b'
    } else {
        return 'b is greater than a'
    }
}

console.log(compare(a, b))
console.log(compareTwo(a, b))

// par o impar
const esPar = (number) => {
    return (number % 2 === 0)
        ? true
        : false
}
console.log(esPar(7))
console.log(esPar(10))
/*	
Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/

const grade = (score) => {
    if (score >= 80 && score <= 100) {
        return 'A';
    } else if (score >= 70 && score <= 89) {
        return 'B';
    } else if (score >= 60 && score <= 69) {
        return 'C';
    } else if (score >= 50 && score <= 59) {
        return 'D';
    } else if (score >= 0 && score <= 49) {
        return 'F';
    } else {
        return 'Invalid value';
    }
};

console.log(grade(90)); // Output: A
console.log(grade(75)); // Output: B
console.log(grade(65)); // Output: C
console.log(grade(55)); // Output: D
console.log(grade(45)); // Output: F
console.log(grade(110)); // Output: Invalid value

const checkSeason = () => {
    const month = prompt('Enter month: ')
    if (month === 'September' || month === 'October' || month === 'November') {
        return 'Autumn';
    } else if (month === 'December' || month === 'January' || month === 'February') {
        return 'Winter';
    } else if (month === 'March' || month === 'April' || month === 'May') {
        return 'Spring';
    } else if (month === 'June' || month === 'July' || month === 'August') {
        return 'Summer';
    } else {
        return 'Invalid month';
    }
}
console.log(checkSeason())



const input = document.querySelector('#day')
const inputMonth = document.querySelector('#monthSelect')

input.addEventListener('change', (e) => {
    const day = e.target.value
    if (day === 'Saturday' || day === 'Sunday') {
        alert('It is weekend')
    } else {
        alert('Its weekday')
    }
    input.value = ''
})

inputMonth.addEventListener('change', (e) => {
    const month = Number(e.target.value)
    switch (month) {
        case 1: {
            alert('January have 31 days')
            break
        }
        case 2: {
            alert('February have 28 days')
            break
        }
        case 3: {
            alert('March have 31 days')
            break
        }
        case 4: {
            alert('April have 30 days')
            break
        }
        case 5: {
            alert('May have 31 days')
            break
        }
        case 6: {
            alert('June have 30 days')
            break
        }
        case 7: {
            alert('July have 31 days')
            break
        }
        case 8: {
            alert('August have 31 days')
            break
        }
        case 9: {
            alert('September have 30 days')
            break
        }
        case 10: {
            alert('October have 31 days')
            break
        }
        case 11: {
            alert('November have 30 days')
            break
        }
        case 12: {
            alert('December have 31 days')
            break
        }
        default: {
            alert('Invalid month')
        }
    }
    })
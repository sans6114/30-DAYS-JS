/* 
    EJERCICIOS:
    Level 2
1. Using `console.log()`, print out the following statement:
    - "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."

2. Using `console.log()`, print out the following quote by Mother Teresa:
    - "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

3. Check if `typeof '10'` is exactly equal to `10`. If not, make it exactly equal.

4. Check if `parseFloat('9.8')` is equal to `10`. If not, make it exactly equal to `10`.

5. Check if `'on'` is found in both `python` and `jargon`.

6. I hope this course is not full of jargon. Check if `jargon` is in the sentence.

7. Generate a random number between 0 and 100 inclusively.

8. Generate a random number between 50 and 100 inclusively.

9. Generate a random number between 0 and 255 inclusively.

10. Access the 'JavaScript' string characters using a random number.

11. Use `console.log()` and escape characters to print the following pattern:

    ```
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
    ```

12. Use `substr` to slice out the phrase "because because because" from the following sentence:
    - `'You cannot end a sentence with because because because is a conjunction'`

*/

const sentence = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
const sentenceByTeresa = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(sentence)
console.log(sentenceByTeresa)

console.log('10' === 10)
const tenInString = '10'
const tenInNumber = +tenInString
console.log(typeof (tenInString) === 'string')
console.log(typeof (tenInNumber) === 'number')

const number = parseFloat('9.8')
console.log(Math.ceil(number) === 10)

const stringOne = 'Phyton'
const stringTwo = 'jargon'

console.log(stringOne.includes('on') && stringTwo.includes('on'))

const numRandom = Math.floor(Math.random() * 101)
const numRandomTwo = Math.floor(Math.random() * 256)
console.log(numRandomTwo)


const javascript = 'JavaScript'
const accedingToIndex = (string) => {
    const index = Math.floor(Math.random() * string.length);
    return string.charAt(index)
}
console.log(accedingToIndex(javascript))

const myFunction = () => {
    for (let i = 1; i <= 5; i++) {
        console.log(`${i} 1 ${i} ${i * i} ${i * i * i}`)
    }
}// yo necesito 5 veces multiplicar el numero de ese ciclo por 
myFunction()

const paragraph = 'You cannot end a sentence with because because because is a conjunction'
console.log(paragraph.slice(31,55))

/* 
Level 3
    'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
    Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

    Clean the following text and find the most frequent word (hint, use replace and regular expressions).

        const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

    Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
*/

const sentenceForThree = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'

const love = sentenceForThree.match(/love/gi)
console.log(`love appears ${love.length} times.`)

const sentenceForThreeTwo = 'You cannot end a sentence with because because because is a conjunction'

const because = sentenceForThreeTwo.match(/because/gi)
console.log(`because appears ${because.length} times.`)
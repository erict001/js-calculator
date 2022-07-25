const answers = document.getElementById("answers")
const numbers = document.getElementById("numbers")
const operators = document.getElementById("operators")
const submit = document.getElementById("equal")
const clear = document.getElementById("clear")


array = []

function multiples(event) {
    console.log(event.target.innerHTML)
    answers.innerHTML = event.target.innerHTML
    array.push(answers.innerHTML)
    console.log(array)
}

function operations(event) {
    answers.innerHTML = event.target.innerHTML
    array.push(answers.innerHTML)
    console.log(array)
}

function operations(event) {
    answers.innerHTML = event.target.innerHTML
    array.push(answers.innerHTML)
    console.log(array)
}

function submission() {
    if (array.includes("*")) {
        let multiple = array[0] * array[2]
        answers.innerHTML = multiple
    }
}

function clearing() {
    array = [];
    answers.innerHTML = 0
    console.log(array)
}
 
numbers.addEventListener("click", multiples)
operators.addEventListener("click", operations)
submit.addEventListener("click", submission)
clear.addEventListener("click", clearing)
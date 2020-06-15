let numbers = document.querySelectorAll('.numbers')
let inputText = document.querySelector('#input')
let operators = document.querySelectorAll('.oper')
let history = document.querySelector('#history')
let equals = document.querySelector('.equals')
let decimal = document.querySelector('#decimal')
let backspace = document.querySelector('#backspace')
let operation, total = ''
let inputvalue, historyvalue
let inc = 0
numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        inputText.innerHTML += number.id
    })
})
operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        historyvalue = inputText.innerHTML
        history.innerHTML = inputText.innerHTML + ' ' + operator.id;
        inputText.innerHTML = ''
        operation = operator.id
    })
})
document.querySelector('#clear').addEventListener('click', (e) => {
    inputText.innerHTML = ''
    history.innerHTML = ''
    inc = 0
})
backspace.addEventListener('click', (e) => {
    inputText.innerHTML = inputText.innerHTML.slice(0, inputText.innerHTML.length - 1)
})
decimal.addEventListener('click', (e) => {
    if (!inputText.innerHTML.includes('.')) {inputText.innerHTML += '.'}
})
equals.addEventListener('click', (e) => {
    if (inc == 0) {inputvalue = inputText.innerHTML}
    dothemath(operation, historyvalue, inputvalue)
    inc += 1
})
function addNum(num) {
    inputText.innerHTML += num
}
function dothemath(operation, a, b) {
    if (operation == '+') {total = parseFloat(a) + parseFloat(b)}
    else if (operation == '/') {total = parseFloat(a) / parseFloat(b)}
    else if (operation == '*') {total = parseFloat(a) * parseFloat(b)}
    else if (operation == '-') {total = parseFloat(a) - parseFloat(b)}
    inputText.innerHTML = total
    history.innerHTML = ''
    historyvalue = total
}
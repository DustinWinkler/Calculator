

//same operator multiple times broken
//ie 1+2+3+4+5+6+1, then equals at the end 
//adds 6 instead of one for the last operation


let numbers = document.querySelectorAll('.numbers')
let inputText = document.querySelector('#input')
let operators = document.querySelectorAll('.oper')
let history = document.querySelector('#history')
let equals = document.querySelector('.equals')
let decimal = document.querySelector('#decimal')
let backspace = document.querySelector('#backspace')
let operation, total = ''
let inputvalue, historyvalue
let inc, inc2 = 0
const buttons = Array.from(document.querySelectorAll('.numbers'))
const buttonCodes = buttons.map(e => {
    return e.textContent
})
const operatorsArray = ['+','-','*','/']
document.addEventListener('keydown', (e) => {
    if (buttonCodes.includes(e.key)) {addnum(e)}
    else if (operatorsArray.includes(e.key)) {operator2(e.key)}
    else if (e.key === 'Backspace') {    inputText.innerHTML = inputText.innerHTML.slice(0, inputText.innerHTML.length - 1)}
    else if (e.key === 'Enter' || e.key === '=') {if (inc == 0) {inputvalue = inputText.innerHTML}
    dothemath(operation, historyvalue, inputvalue)
    inc += 1
    inc2 = 0}
    else if (e.key === 'c') {inputText.innerHTML = ''
    history.innerHTML = ''
    inc = 0
    inc2 = 0
    historyvalue = 0
    operation = ''}
})

numbers.forEach(number => {
    number.addEventListener('click', addnum2)})  

function addnum(meme) {
    if (inputText.innerHTML.length < 17) {
        if(buttonCodes.includes(meme.key)){
        inputText.innerHTML += meme.key}
    }
} 
function addnum2(e) {
    if (inputText.innerHTML.length < 17) {
        inputText.innerHTML += e.target.innerHTML
    }
}   
//fix double operator press issue and allow strings of 
//operations (like kims calculator)
operators.forEach((meme) => {
    meme.addEventListener('click', operator)})
        
function operator(e) {
    if (inputText.innerHTML != '') {    
    if (inc2 < 1) {
        historyvalue = inputText.innerHTML
        history.innerHTML = inputText.innerHTML + ' ' + e.target.id;
        inc = 0
        inputText.innerHTML = ''
        operation = e.target.id
        inc2 += 1
        }     
        else {
            inputvalue = inputText.innerHTML
            operation = history.innerHTML.split('').pop()
            historyvalue = history.innerHTML.slice(0, -2)
            dothemath(operation, historyvalue, inputvalue)
            history.innerHTML = inputText.innerHTML + ' ' + operation
            inputText.innerHTML = ''
           
            
        }
    }    
}
function operator2(key) {   
    if (inputText.innerHTML != '') {
    if (inc2 < 1) {
        historyvalue = inputText.innerHTML
        history.innerHTML = inputText.innerHTML + ' ' + key;
        inc = 0
        inputText.innerHTML = ''
        operation = key
        inc2 += 1
        }     
        else {
            inputvalue = inputText.innerHTML
            operation = history.innerHTML.split('').pop()
            historyvalue = history.innerHTML.slice(0, -2)
            dothemath(operation, historyvalue, inputvalue)
            history.innerHTML = inputText.innerHTML + ' ' + operation
            inputText.innerHTML = ''
            
        
    
        }
    }    
}
document.querySelector('#clear').addEventListener('click', (e) => {
    inputText.innerHTML = ''
    history.innerHTML = ''
    inc = 0
    inc2 = 0
    historyvalue = 0
    operation = ''
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
    inc2 = 0
})
function dothemath(operation, a, b) {
    if (inputText.innerHTML != '') {
    if (operation == '+') {total = parseFloat(a) + parseFloat(b)}
    else if (operation == '/') {total = parseFloat(a) / parseFloat(b)}
    else if (operation == '*') {total = parseFloat(a) * parseFloat(b)}
    else if (operation == '-') {total = parseFloat(a) - parseFloat(b)}
    inputText.innerHTML = total
    history.innerHTML = ''
    historyvalue = total
    }
}
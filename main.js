const display = document.getElementById("savedNumber")

let firstNumber
let secondNumber
let operator
let numberEnteredResult = []
let step = 0

document.addEventListener('click', (e) => {
    if(e.target.className === 'number'){
        let keyedNumber = e.target.value
        numberEnteredResult.push(keyedNumber)
        updateDisplay()
    } else if (e.target.className === 'operator'){
        let operator = e.target.value
            if(step === 0){
                firstNumber = numberEnteredResult.join('')
                numberEnteredResult = []
                step = 1
            }else if(step === 1){
                secondNumber = numberEnteredResult.join('')
                numberEnteredResult = []
                
                if(operator === '+'){
                    let result = parseFloat(firstNumber) + parseFloat(secondNumber)
                    numberEnteredResult.push(result)
                    updateDisplay()
                    step = 1
                    secondNumber = ''
                    firstNumber = numberEnteredResult.join('')
                    numberEnteredResult = []
                } else if(operator === '-'){
                    let result = parseFloat(firstNumber) - parseFloat(secondNumber)
                    numberEnteredResult.push(result)
                    updateDisplay()
                    step = 1
                    secondNumber = ''
                    firstNumber = numberEnteredResult.join('')
                    numberEnteredResult = []
                } 
        }
    }

})

function updateDisplay(){
    display.innerHTML = `
            <p>${numberEnteredResult.join('')}</p>

`
}



const display = document.getElementById("savedNumber")
let displayedNumber = ''
let storedNumber = ''
let calculationResult = ''

document.addEventListener("click", (e)=>{
    if (e.target.className === 'number'){
        let btn = e.target.value
        displayedNumber += btn
        updateDisplay()


        } else if(e.target.className === 'operator' && e.target.id === 'plusBtn'){
            calculationResult = storedNumber + displayedNumber    
            console.log(calculationResult)
            displayedNumber = 0
    
}
})


function updateDisplay(){
        display.innerHTML = `
            <p>${displayedNumber}</p>

        `
    
}



const display = document.getElementById("savedNumber")
let displayedNumber = ''
let newTotalNumber = ''

document.addEventListener("click", (e)=>{
    if (e.target.className === 'number'){
        let btn = e.target.value
        displayedNumber += btn
        updateDisplay()


        } else if(e.target.className === 'operator'){
            let btn = e.target.value
            console.log(btn)
            newTotalNumber = displayedNumber
            
            console.log(newTotalNumber)
            displayedNumber = ''
            console.log(displayedNumber)
        } else if(e.target.id === 'plusBtn'){
            add()
        }
    // } else if(e.target.className === 'equals'){


})


function add(num1, num2){
   let sum = num1 + num2
}
function updateDisplay(){
    display.innerHTML = `
            <p>${displayedNumber}</p>

`
}



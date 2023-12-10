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
            
        }
    // } else if(e.target.className === 'equals'){

    // } else if(e.target.className === 'delete')


})


function updateDisplay(){
    display.innerHTML = `
            <p>${displayedNumber}</p>

`
}



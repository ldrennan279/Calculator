const main = document.getElementById("display")
let savedNumber = ''

document.addEventListener("click", (e)=>{
    if (e.target.className === 'number'){
        let btn = e.target.value
        savedNumber += btn
        }
    // } else if(e.target.className === 'operator'){

    // } else if(e.target.className === 'equals'){

    // } else if(e.target.className === 'delete')
    

})


// main.innerHTML += `
//     <div class="resultDisplay">
//         <p>0</p>
//     <div>
// `

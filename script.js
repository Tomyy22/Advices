const diceEl = document.querySelector(".dice-container");

diceEl.addEventListener("click",(e)=>{
    e.preventDefault();
    callAPI();
    
});

function callAPI(){
    const url = "https://api.adviceslip.com/advice";

    fetch(url)
    .then(data => {
        return data.json()
    })
    .then(dataJSON =>{
        if(dataJSON.cod == '404'){
           
        }
        else{
            id = dataJSON.slip.id;
            string = dataJSON.slip.advice;
            document.querySelector(".number-advice").textContent = `Advice #${id}`
            document.querySelector(".advice").textContent = `"${string}"`
        }
    })
   
}

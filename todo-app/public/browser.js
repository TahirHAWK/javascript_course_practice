
document.addEventListener("click", function(e){
    if(e.target.classList.contains("edit-me")){
        // alert("edit button")
        let userInput = prompt("so tell me,  what do you desire? ", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML)
        
        // console.log(userInput)
        if (userInput) {
            axios.post('/update-item', {text: userInput, id: e.target.getAttribute("data-id")}).then(function(){
                e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput 
               }).catch(function(){
                   console.log("please try again later.")
               })
        }
    }
})
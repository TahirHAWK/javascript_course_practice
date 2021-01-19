
    let ourForm = document.getElementById("ourForm")
    let ourField = document.getElementById("ourField")
    
    ourForm.addEventListener("submit", (e) => {
        e.preventDefault()
        console.log(ourField.value)
    })
    
    let ourList = document.getElementById("ourList").value 
    console.log(ourList)

 
    
    





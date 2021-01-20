
    let ourForm = document.getElementById("ourForm")
    let ourField = document.getElementById("ourField")
    let ourList = document.getElementById("ourList")

    let something = ""

    ourForm.addEventListener("submit", (e) => {
        e.preventDefault()
        createItem(ourField.value)
    })
    
    function createItem(x) {
        let ourHTML = `<li> ${x} <button onclick="deleteItem(this)">Delete</button></li>`
        something = x
        ourList.insertAdjacentHTML("beforeend", ourHTML)
        ourField.value = ""
        ourField.focus()
        

    }

    function deleteItem(elementToDelete) {
        // alert(  `about "${something}", delete requested`)
        elementToDelete.parentElement.remove()
    } 
    
   
    
    





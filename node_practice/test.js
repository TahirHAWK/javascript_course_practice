// let strawberrycount = 3

// if(strawberrycount > 10){
//     console.log("you have enough strawberries")
// }
// else {
//     console.log("you don't")
// }

// creating a simple web server with node 


let http = require("http")

let ourApp = http.createServer(function(request, response){
    if(request.url == "/"){

        response.end("hello and welcome to our site")
    }
    if(request.url == "/about"){
        response.end("thank you for your interest")

        // console.log(request.url)
    }
    response.end("we cannot find what you're looking for.")
})
ourApp.listen(3000)


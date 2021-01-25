let express = require("express")
let ourApp = express()

ourApp.use(express.urlencoded({extended: false}))

ourApp.get('/', function(request, response){
 response.send(`
 <form action="/answer" method="POST">
 <p>what color is the sky on a clear and sunny day.</p>
 <input name="skycolor" autocomplete="off">
 <button>Submit Answer</button>
 </form>
 `)
})

ourApp.post('/answer', function(request, response){
//  response.send("Thank you for submitting the form.")
    if(request.body.skycolor.toUpperCase() == 'BLUE'){
        response.send(`
        <p>Congrats, that is the correct answer.</p>
        <a href="/">back to homepage</a>
        `)
    }
    else{
        response.send(`
        <p>sorry, that's incorrect..</p>
        <a href="/">back to homepage</a>
        `)
    }
})
ourApp.get('/answer', function(request, response){
    response.send("are you lost? there's nothing to see here.")
   })
ourApp.listen(3000)

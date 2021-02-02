let express = require('express')
let mongodb = require('mongodb')
let sanitizeHTML = require('sanitize-html')

let app = express()
let db

let port = process.env.PORT
if (port == null || port == ""){
  port = 3000

}

app.use(express.static('public'))

let connectionString = 'mongodb+srv://todoAppUser:todoAppUser@cluster0.ztdkz.mongodb.net/todoApp?retryWrites=true&w=majority'
mongodb.connect( connectionString, {useNewUrlParser: true,
useUnifiedTopology: true}, function(err, client){

  db = client.db()
  app.listen(port)
})

app.use(express.json())
app.use(express.urlencoded({extended: false}))

function passwordProtected(request, response, next) {
  response.set('WWW-Authenticate','Basic realm= "Simple Todo App"')
  console.log(request.headers.authorization)
  if(request.headers.authorization == "Basic dG9kb2FwcDp0b2RvYXBw") {
    next()

  } else {
    response.status(401).send("Äuthentication required")
  }
}

app.use(passwordProtected)

app.get('/', function(request, response) {
  db.collection('items').find().toArray(function(err, items) {
    response.send(`<!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Simple To-Do App</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    </head>
    <body>
      <div class="container">
        <h1 class="display-4 text-center py-1">To-Do App!</h1>
        
        <div class="jumbotron p-3 shadow-sm">
          <form id="create-form" action="/create-item" method="POST">
            <div class="d-flex align-items-center">
              <input id="create-field" name="item" autofocus autocomplete="off" class="form-control mr-3" type="text" style="flex: 1;">
              <button class="btn btn-primary">Add New Item</button>
            </div>
          </form>
        </div>
        
        <ul id="item-list" class="list-group pb-5">
          
        </ul>
        
      </div>
      <script>
      let items = ${JSON.stringify(items)}
      </script>
      <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

      <script src="/browser.js"></script>  
    </body>
    </html>`)
  })
  

})

app.post('/create-item', function(request, response){
//  console.log(request.body.item)
let safeText = sanitizeHTML(request.body.text, {allowedTags: [], allowedAttributes: {}})
db.collection('items').insertOne({text: safeText}, function(err, info){
  // response.send("Thanks for submitting the form")
  response.json(info.ops[0])

})
})


app.post('/update-item', function(request, response){
  // console.log(request.body.text)
  // response.send("success")
  let safeText = sanitizeHTML(request.body.text, {allowedTags: [], allowedAttributes: {}})
  db.collection('items').findOneAndUpdate({_id: new mongodb.ObjectID(request.body.id)}, {$set: {text: safeText}}, function(){
    response.send("success.")
  })
})


app.post('/delete-item', function(request, response){
db.collection("items").deleteOne({_id: new mongodb.ObjectID(request.body.id)}, function() {
  response.send("success")
})
})


const Express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var app = new Express();
var booksRouter = require("./routes/book")
var authorRouter = require("./routes/author")

app.use('/',booksRouter)
app.use('/author',authorRouter)

app.use(bodyParser.json()); //set bodyParser as middleware
app.use(bodyParser.urlencoded({extended:true}))

app.use(Express.static(path.join(__dirname,"public")))

app.set('view engine','ejs')

app.listen(process.env.PORT || 3000,()=>{
    console.log('Server started in port 3000');
})
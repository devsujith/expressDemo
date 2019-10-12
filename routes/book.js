var booksArray = [
{
    "title" : "title 1",
    "desc" : "test desc",
    "author" : "author 1",
    "price" : 100,
    "url" : "https://api.randomuser.me/portraits/thumb/men/58.jpg",
    "genre" : "Fiction"
 },
 {
    "title" : "title 2",
    "desc" : "test desc",
    "author" : "author 2",
    "price" : 200,
    "url" : "https://api.randomuser.me/portraits/thumb/men/58.jpg",
    "genre" : "Fantasy"
 },
 {
    "title" : "title 3",
    "desc" : "test desc",
    "author" : "author 3",
    "price" : 300,
    "url" : "https://api.randomuser.me/portraits/thumb/men/58.jpg",
    "genre" : "Thriller"
 },
 {
    "title" : "title 4",
    "desc" : "test desc",
    "author" : "author 4",
    "price" : 400,
    "url" : "https://api.randomuser.me/portraits/thumb/men/58.jpg",
    "genre" : "Drama"
 }

]


const Express = require('express');
const router = Express.Router();

router.get('/',(req,res)=>{

   res.render('index',{"booksArray":booksArray})

})

module.exports= router 
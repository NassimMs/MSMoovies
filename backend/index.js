const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")
const bodyParser = require("body-parser")


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'msmoovies',
});

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

//To redirect to a route we use  

app.get('/api/get/movies',(req,res) =>{
    const sqlselect = "SELECT * from movies"
    db.query(sqlselect, (err,result)=>{
        res.send(result);
    })
})

//Get reviews list but for specific movie

app.get('/api/get/reviewslist/:idmovies',(req,res) =>{
    const id = req.params.idmovies
    const sqlselect = "SELECT * from reviews where idmovie = ?"
    db.query(sqlselect,id, (err,result)=>{
        res.send(result);
    })
})

// To get a specific movie 
app.get('/api/get/movies/:idmovies',(req,res) =>{
    const id = req.params.idmovies
    const sqlselect = "SELECT * from movies where idmovies = ?"
    db.query(sqlselect,id, (err,result)=>{
        res.send(result);
    })
})


// Post Requests 
// Insert Review 

app.post('/api/post/review/',(req,res) =>{
    const review = req.body.review
    const email = req.body.email
    const idmovie = req.body.movieid
    const sqlquery = "INSERT INTO reviews(movie_review,useremail,idmovie,review_date) VALUES (?,?,?,NOW());"
    db.query(sqlquery,[review,email,idmovie], (err,result)=>{
        res.send("Connection established")
        console.log(err)
    })
})

app.listen(3001,() =>{
    console.log("Running on port 3001")
})
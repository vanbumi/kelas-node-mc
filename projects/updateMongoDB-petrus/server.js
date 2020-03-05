var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var app = express()

mongoose.connect('mongodb://test:test@cluster0-shard-00-00-2emxt.mongodb.net:27017,cluster0-shard-00-01-2emxt.mongodb.net:27017,cluster0-shard-00-02-2emxt.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log("Sudah Bisa Jalan")
    }
})

// app.use(bodyParser.json)
// app.use(bodyParser.urlencoded({extended:true}))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// var MongoClient = require('mongodb').MongoClient;

// var uri = "mongodb://test:test@cluster0-shard-00-00-2emxt.mongodb.net:27017,cluster0-shard-00-01-2emxt.mongodb.net:27017,cluster0-shard-00-02-2emxt.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
// MongoClient.connect(uri, function(err, client) {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });





app.get('/', function (req, res, next) {
    res.json("Hallo selamat datang")
})

// app.get('/:name', function(req, res, name){
//     res.json(req.params.name)
// })


// membuat schema
var UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
})

// membuat model
var User = mongoose.model('User', UserSchema);

app.get('/create-user', function (req, res, next) {
    var user = new User()
    user.name = "Brandon",
        user.age = 17;
    user.save(function (err) {
        if (err) next(err)
        res.json(user)

    })
})

app.post("/create-user", function (req, res, next) {
    var user = new User()
    user.name = req.body.name,
        user.age = req.body.age,
        user.save(function (err) {
            if (err) next(err)
            res.json(user)
        })
})


app.listen(5000, function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log("app ke port 5000")
    }
})
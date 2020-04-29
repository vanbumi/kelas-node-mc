### Bagian Ke 14 NodeJS Fullstack Dev

## GoesShop

Kita akan membuat project kasus Shopping Cart (Toko Online) dan kita berinama Goes Shop.

### Basic Setup

=> Buat folder baru di project kerja anda berinama "GoesShop".

    mkdir GoesShop
    cd GoesShop
    
    npm init // pilih server.js sebagai entry point

=> Buka file editor anda.    

=> Download mongodb compas sebagai GUI mongodb di https://www.mongodb.com/products/compass

    search "mongodb compass" & download

=> Buat database baru beri nama "goesshopdb".     

=> Buat Collection baru beri nama pages.

=> Kembali ke file editor anda, buat file baru "server.js".

=> Install express & template engine "ejs"

    npm install --save express ejs

=> Cek hasil install di package.json file

=> Update file server.js sbb:

    // require
    var express = require("express");
    var path = require("path") // come with node --> memudahkan kita untuk membuat page & static page URL.   
    
    // app init
    var app = express();
    
    // view engine setup
    app.set("views", path.join(__dirname, 'views'));
    app.set("view engine", "ejs");
    
    // public folder setup
    app.use(express.static(path.join(__dirname, 'public')))

=> Buat folder baru tsb diatas: "view", "models", "public" dan "routes"

=> Buat halaman index

    app.get("/", function(req, res){
      res.send("Home Page")
    });

=> Setup server

    var port = 3000
    
    app.listen(port, function(){
      console.log("Server run on port " + port)
    });    

=> Jalankan server

    nodemon server

=> Buka di browser url localhost:3000

### Setup Database

Pada project ini kita akan menggunakan database mongodb secara internal (locals), dengan menggunakan bantuan "mongoose" info lanjut seach for "mongoose" http://mongoosejs.com/.

=> Require mongoose

    var mongoose = require("mongoose")

=> Connect database

    mongoose.connect('mongodb://localhost/goesshopdb');
    
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      console.log("Connected to MongoDB")
    });

=> Jalankan server:

    nodemon server

=> Buat folder baru pada root "config".

=> Buat file baru pada "config/database.js"

=> Update file database.js dan pindahkan 'mongodb://localhost/goesshopdb' ke dalam file database.js

    module.exports = {
      database: 'mongodb://localhost/goesshopdb'
    }

=> Kembali ke file server.js

    var config =  require("./config/database")
    
    // update this line
    mongoose.connect('mongodb://localhost/goesshopdb');
    
    // menjadi
        mongoose.connect(config.database);

=> Cek pada Terminal pastikan tidak ada error.

### Setup Template Engine

=> Pada folder views buat folder baru berinama "_layouts".

=> Buat file baru pada _layouts berinama "header.ejs", footer.ejs, adminheader.js, adminfooter.ejs.

=> Buka getbootstrap.com

































---
Copyright &copy;mediocaddemy
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari mediocaddemy Corporation. Pelanggaran akan hak cipta ini akan kami ajukan ke Institusi Hukum yang berlaku.
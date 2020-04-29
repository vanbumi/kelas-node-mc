### Bagian Ke 11 NodeJS Fullstack Dev

## Cookie and Session

Apa itu **Cookie** adalah semua request yang dikirim dari browser (user) ke server.
Apa itu **Session** adalah kumpulan data dari semua Cookie yang disimpan di dalam server berasosiasi dengan ID User.

![](img/diagram-cookie.png)

Perlu diingat!

* **Cookie** disimpan pada browser dan
* **Session** disimpan didalam memory server dengan ID User.

Pada nodejs "session" menggunakan library: **express-session**, jika server restart session akan terhapus, untuk menjaga session persistence (tetap bertahan) anda harus menyimpannya ke dalam database seperti **Mongodb** (mongodb.com) atau **Redis** (redis.io).  

### Membuat Auth app

Ikuti Step berikut:

=> Buat folder project baru beri nama belajarAuth.

=> CD ke belajarAuth

=> npm init, pilih server.js pada isian.

=> Install libraries:

    npm install express mongoose morgan body-parser express-session cookie-parser --save

=> Buka belajarAuth dengan editor anda.

=> cek pada file package.json, semua library sudah terinstall?

> **Library Morgan** adalah HTTP request logger middleware untuk Node.js. Morgan menyederhanakan proses of logging requests pada aplikasi anda. Morgan adalah "helper" yang mengumpulkan "logs" dari server anda, seperti request logs. Morgan menghemat waktu developer karena mereka tidak perlu secara manual membuat common logs. Secara standard dan automatically membuat request logs.

> **Express Session** adalah library yang digunakan untuk menyimpan **data session**.

> **Cookie Parser** adalah library yang digunakan untuk membaca **data cookie** dari browser.    

=> Buat file baru "server.js", dan buat code boilerlate :

    var express = require('express');
    var cookieParser =  require('cookie-parser');
    var session = require('express-session');
    var bodyParser = require('body-parser');
    var morgan = require('morgan');
    var mongoose = require('mongoose');
    
    var app = express();
    
    // Membuat koneksi database
    mongoose.connect('..link db..', function(err){
      if (err){
        console.log(err);
      } else {
        console.log("Koneksi db oke")
      }
    });
    
    // Middleware
    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(session({
      resave: true, // to force session save to session store after modified or not selama request.
      saveUnitialized: true, //to save to store unitialize session.
      secret: "Hello", // secret to sign sessin ID cookie.
      store: session // dimana akan di store, which is in store session.
    }));
    
    	// Setup Server
    app.listen(3000, function(err){
      if (err){
        console.log(err);
      } else {
        console.log("Server run port 3000")
      }
    });

Jalankan server:

		nodemon server

Menyimpan session di session store (express session) tidak persistence bila server di restart. Untuk menjaga persistent kita membutuhkan **connect-mongo** library.

    npm install connect-mongo --save

Kemudian require dibawah var mongose:

    var MongoStore = require('connect-mongo')(session);    

Kemudian udpate store property:

    store: new MongoStore({ url: '..link mongodb..', autoReconnect: true })

Nah ... sekarang kita sudah paham bagaimana menyimpan data baik itu di **Cookie** maupun di **Session** 

Session kita sekarang sudah **"persistence"**, materi berikutnya kita akan belajar bagaimana menggunakan Cookie dan Session pada saat User current login, dan kita akan membuatnya next.

So Continue to next video :)



---
Copyright &copy;mediocaddemy
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari mediocaddemy Corporation. Pelanggaran akan hak cipta ini akan kami ajukan ke Institusi Hukum yang berlaku.
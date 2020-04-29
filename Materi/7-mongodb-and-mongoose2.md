### Bagian Ke 7

**MOHON DIBACA!: Sehubungan dengan mlab.com sudah tidak lagi melakukan layanan user baru, maka mlab digantikan dengan Mongdb Atlas, anda bisa membuaat akun di mongodb.com**

**Untuk itu ikuti modul tutorial menggunakan PDF ini, semua sintaks koding tetap sama, yang berbeda adalah mengganti mlab dengan mongodb Atlas, termasuk cara koneksi nya sama seperti di mlab, ikuti tutorial video nya dan gunakan mongodb Atlas, pengganti mlab.**

## MongoDB dan Mongoose 2 

Pada Video sebelumnya kita belajar menambahkan User baru dengan method GET, kali ini kita akan menggunakan method POST, yang umumnya method POST digunakan contohnya from input dan di kirim ke server dengan method POST.

=> Method GET sebelumnya di command out dulu.

    app.post('/create-user', function(req, res, next){
        var user = new User();
        ...
        ...
    });        

Sampai disini kita membutuhkan package library yang disebut "body parser", body parser berfungsi sebagai pembaca dan pengambil data (reading data) dari user input, seperti form input contoh diatas. Data yang diambil adalah dari body HTML / <body> ke </body> yang berbentuk TEXT atau form TEXT FIELD. Untuk itu kita harus install body parser via terminal:

    npm install body-parser --save

Setelah kita install kita harus menuliskan code middleware diatas code function root / index, sbb:

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));   

Supaya bisa available bekerja jangan lupa kita require dulu dihalaman atas sbb:

    var bodyParse = require("body-parser");

**Penjelasan Code**

=> Baris pertama adalah memberikan perintah body parser menerima data dengan format json.

=> Baris kedua adalah body parse untuk menerima Character dari UTF-8 adalah semua Character encoding yang dinput oleh user (kata lain yang ada pada keyboard PC/Laptop). 

Kemudian kita edit method POST sbb:

    app.post('/create-user', function(req, res, next){
      var user = new User();
      user.name = req.body.name;
      user.age = req.body.age;
      user.save(function(err){
        if (err) console.log(err);
        res.json(user);
      })
    });

### Postman

Untuk test code tsb diatas kita gunakan POSTMAN, POSTMAN adalah sofware extenal untuk membantu kita untuk melakukan testing API / URL / REST. Gunakan POSTMAN yang diinstall atau POSTMAN google extention, gunakan keyword "POSTMAN google chrome" silahkan install atau bila anda sudah install sila "launch app" :

=> Rubah method kiri atas menjadi POST.

=> Rubah URL nya menjadi localhost:3000/create-user.

=> Klik Tab Body > pilih "x-www-form-urlencoded".

=> Kemudian masukkan form input key dengan name dan age > isi value nya masing-masing.

=> Pastikan server "RUN".

=> Klik "Send".

=> Maka akan muncul object data yang telah kita buat tadi.

=> Kemudian cek ke mlab, telah ditambahkan data baru. 

Congrat!!

Continue to next video :)



---
Copyright &copy;mediocaddemy
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari mediocaddemy Corporation. Pelanggaran akan hak cipta ini akan kami ajukan ke Institusi Hukum yang berlaku.
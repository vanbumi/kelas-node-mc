# Kelas NodeJS

### Bagian Ketiga

## Basic Website 1

Pada materi ini kita akan belajar konsep dasar bagaimana NodeJS dan NPM bekerja dalam membangun sebuah website secara umum.

Dalam membangun sebuah website kita memilki 2 pilihan, pertama membuat seluruh website dengan awal (scratch) tanpa bergantung dari Library apapun baik itu open source library atau packages. Kedua membuat website yang bergantung dari opensource library.

Keuntungan dengan menggunakan opensource library mempersingkat waktu pengembangan dan lebih cepat untuk mendeploy web app tsb live.

> Jika anda membangun web app hanya menggunakan plain JS anda akan mengalami banyak kesulitan karena harus membangun library dan fitur sendiri.

> Gunakan Package Manager (NPM) untuk instalasi Library yang akan memudahkan anda dalam pembangunan dan pengembangan sebuah web app, antara lain speed development & speed of deploy.

 Jadi dalam kelas ini kita akan memanfaatkan opensource library yg telah tersedia, kita akan belajar bagaimana menggunakan package manager dan nodeJS dalam membuat sebuah aplikasi web.

 --> Buka terminal anda (pada Mac) cmd (pada Windows), pada Windows ada bisa juga gunakan Git bash anda sehingga operasi commandline nya mirip dengan keluarga Linux.

 --> Arahkan ke directori kerja anda, direktori kerja saya adalah

    Desktop > KelasNodeJS 
    
    mkdir projects
    
    mkdir basic-web
    
    npm init

> npm init digunakan untuk menginstall package json sehingga ada dapat menyimpan list library disana yang telah di install.

--> Pada isian entry point isi dengan: server.js.

--> Buka Editor anda dan buat file baru server.js, sebagai file utama dari aplikasi anda.

--> Install epress:

    npm install express --save

> install express akan membuat folder baru node_modules dimana library dari perintah2 express tersimpan disana.

--> Sekarang cek package.json dimana express telah ditambahkan disana.

--> Buka server.js

    var express = require('express);

Setelah di import kita instantiasikan menjadi object yang kita sebut app:

    var app = express();

Setelah itu kita harus bind ke dalam sebuah port numbar pada localhost:

    // connection
    	mongoose.connect('mongodb://localhost/webnode', { useNewUrlParser: true });
    
    	var db = mongoose.connection;
    	db.on('error', console.error.bind(console, 'connection error:'));
    	db.once('open', function () {
    	});
    	// we're connected!
    	console.log('Connected to MongoDB') 

--> Kemudian jalankan serser dengan perintah:

    node server

--> Install nodemon Gunakan sudo untuk install Globaly.

    sudo npm install nodemon -g

 Jalankan server:

    nodemon server   

 > Instal nodemon untuk automatis run server setelah kita melakukan update file. 







---
Copyright &copy;mediocaddemy
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari mediocaddemy Corporation. Pelanggaran akan hak cipta ini akan kami ajukan ke Institusi Hukum yang berlaku.
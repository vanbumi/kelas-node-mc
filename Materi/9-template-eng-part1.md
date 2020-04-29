### Bagian Ke 9 NodeJS Fullstack Dev

## Template Engine Part 1

Template Engine kita gunakan untuk aplikasi-aplikasi NodeJS, ada beberapa Template Engine lain seperti Mustache, Handlebars, doT, EJS dan banyak lagi. Kita menggunakan EJS karena mudah digunakan.

Mengapa kita menggunakan Template Engine? Apakah HTML saja tidak cukup? HTML tidak dapat melakukan fetching dan render object dari database kedalam webpage, karena HTML tidak di desain untuk menggrab data dari server, untuk itulah kita membutuhkan Template Engine. Template Engine membuat HTML kita menjadi lebih "smart".

**Kita akan membuat project baru EJS**: 

=> Buat folder baru pada direktori kerja anda berinama "belajarEjs"

=> CD ke folder belajarEJS.

=> npm init

=> Instal beberapa libraries yang telah kita pelajari sebelumnya:

		npm install express body-parser ejs ejs-mate mongoose --save

=> Buat file baru server.js, dan buat kode boilerplate untuk semua library:

		var express = require('express');
		var bodyParser = require('body-parser');
		var ejs = require('ejs');
		var engine = require('ejs-mate');
		
		var app = express();

=> Setup engine ejs:

		app.engine('ejs', engine);
		app.set('view engine', 'ejs')

=> Kemudian setup middleware:

		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({ extended: true }));

=> Buat folder baru pada root, beri nama "views".

=> Kemudian buat URL baru untuk root template & server

		app.get('/', function(req, res, next){
			res.render('home');
		});
	
		app.listen(3000);

=> Jangan lupa untuk aktifkan server:

		nodemon server

=> Coba test dulu di browser, apa yg terjadi?

=> Sekarang buat file baru views/home.ejs dan buat code sbb:

		<h1>Welcome Home</h1>

=> Kemudian buka getbootrap.com, pilih template disitu dan copas di halaman home.ejs.

=> Test di browser

=> Kemudian cari CDN bootstrap dan paste kan di layoout tsb, link CSS dan JS bootstrap.js nya dan refresh halamannya kembali.

### ejs-mate

Apa kegunanaan ejs-mate?

=> Buatlah folder baru dibawah folder views berinama "partials".

=> Buatlah file baru dibawah folder partials berinama "head.ejs".

=> Cut dan Paste isi dari: 

		<head>
			...copy dan cut...
		</head> 

=> Ke file head.ejs.

=> Kemudian isi Tag head dengan code dibawah ini:

		<head>
			<% include ./partials/head %>
		</head>

=> Buat file baru partials/navbar.ejs

=> Kemudian Cut Navbar dan Paste kan di navbar.ejs tsb.

=> Kemudian include file:

		<% include ./partials/navbar %>

=> Buat file baru partials/footer.ejs

=> partials/javascript.ejs

=> Kemudian Cuat ke 2 sama seperti diatas.

=> Jangan lupa membuat code include nya.

=> Selanjut Refresh the page.

=> Buat sebuah file dibawah folder views/layout.ejs

=> Cut semua code di file home.ejs ke file layout.ejs

=> Lalu Cut content dari code tsb dan paste kan kembali ke home.ejs, jadi home.ejs hanya berisi content dari sebuah halaman saja.

=> Untuk merender file layout.ejs ke home.ejs tambahkan code sbb:

		<% layout('layout') %>

=> Pada layout.ejs tambahkan **ejs-mate** sebagai representasi dari body seluruh halaman.

		<%- body -%>

### Membuat halaman baru "About"

=> Buat file baru views/about.ejs, kemudian tambahkan code untuk merender layout page:

		<% layout('layout') %>
		
		<h1>About Our Company</h1>

=> Untuk menampilkan halaman About, jangan lupa membuat Routes URL baru pada halaman server.js sbb:

		app.get('/about', function(req, res, next){
			res.render('about');
		});

=> Test di browser localhost:3000/about

### Render Object

Jika anda ingin merender sebuah Object misalnya:

		<h1>Welcome Home <span><%= name %></span></h1>

Pada method get 'home' di server.js anda update sbb:

		app.get('/', function(req, res, next){
			res.render('home', { name: 'Dyo!' });
		});

Test pada browser localhost:3000

### If & Else Statement

Kita bisa memberikan kondisi if dan else sbb:

		<% if (name === "Dyo"){%>
			<h1>Welcome Home <span><%= name %></span></h1>
		<% } else { %>
			<h1>Welcome Home <span>somebody?</span></h1>
		<% } %>

Continue for next video :)









---
Copyright &copy;mediocaddemy
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari mediocaddemy Corporation. Pelanggaran akan hak cipta ini akan kami ajukan ke Institusi Hukum yang berlaku.
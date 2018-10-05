# Kelas NodeJS

### Bagian Kedua 

## Basic HTTP

Anda harus memahami cara kerja HTTP ini, tanpa pengetahuan dasar tentang HTTP anda akan gagal memahami materi NodeJS kedepannya.

### Apa itu HTTP?

HTTP adalah protokol dari setiap web aplikasi, pada dasarnya HTTP berisi method yang dimiliki oleh setiap web aplikasi.

### Ada 4 method penting dalam HTTP

**GET**, **POST**, **PUT**, **DELETE**

**GET**

GET = Mengambil data dari server (Retrieve)

Contoh membuka sebuah website di browser.

https://www.google.com

**POST**

POST = Mengirimkan data ke server (Send)

Contoh mengisi form Input.

**PUT**

PUT = Update data dari server (Update)

Contoh mengisi form Edit.

**DELETE**

### Penerapannya dalam node.js dan exppress

    app.get('/');
    app.post('/post-something');
    app.put('/update-something');
    app.detele('/delete-something');

atau:

    router.get('/');
    router.post('/post-something');
    router.put('/update-something');
    router.detele('/delete-something');

Keterangan:

**router = routes = URL**

**https://www.google.com** = app.get('/');

### API dan REST

API = Application Programming Interface.

REST = Representational State Transfer

Dalam Node JS pada dasarnya kedua nya adalah URL = ROUTES

Penerapannya pada programming node js adalah:

    app.get('/api/somenting');

### Perbedaan antara URL biasa dengan API?

    app.get('/', function(request, response){
      response.render('index');
    });

Code diatas responding dengan web page, contoh: https://www.google.com

    app.get('/api/something', function(request, response)){
       response.json('Ini adalah JSON DATA') 
    }    

Code diatas responding dengan DATA, jadi API adalah DATA (responding dengan data).

### Kesimpulan

**URL** ------> **NodeJS + Express**

**Operasi Database** ------> **MongoDB + Mongoose** *Mongoose adalah Library dari MonggoDB

**Frontend Code** ------> **HTML, CSS, JQUERY**

*jika anda menguasai 3 hal ini anda akan menjadi super cool developer :)



---
Copyright &copy;GandrungStudio 2018 
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari PT.Gandrung Media Corporation. Pelanggaran akan hak cipta ini akan kami ajukan ke Institusi Hukum yang berlaku.
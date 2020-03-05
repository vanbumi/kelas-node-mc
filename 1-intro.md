# Kelas NodeJS

### Bagian Pertama 

## Persiapan

1. Membuat folder kerja.
2. Gunakan Editor Brackets.io atau VisualStudioCode, bisa anda gunakan Editor favorit anda seperti Sublime, Atom dsb.

## Teknologi yang digunakan

**NodeJS** Pada dasar nya adalah JavaScript yang berjalan dan bekerja pada sisi server. Dan NodeJS bekerja dengan sangat cepat, berbasis Google Chrome V8 Engine.
https://nodejs.org/en/

**MongoDB** MongoDB adalah kombinasi database yang baik pada NodeJS, dimana NodeJS dan MongoDB seperti PHP dan MySQL. Mongodb adalah **Non Relational Database** atau sering disebut **No SQL**.
https://www.mongodb.com/

**EmbeddedJS** atau eJS, eJS adalah Template Engine, simple templating language yang membantu kita untuk generate HTML markup dengan plain JavaScript. We love JavaScript.
http://www.embeddedjs.com/

**Git dan Github**, Git adalah Version Control, yang akan membuat file kita terorganisasi dengan baik.
https://git-scm.com/ & https://github.com/

**Heroku** heroku adalah cloud hosting yang popular di masyarakat dan mudah cara installasi nya, dari yang sejenis seperti Amazon web service dll.
https://www.heroku.com/

## Mengapa menggunakan MongoDB?

* Menyimpan data besar dengan sedikit atau tanpa struktur / no relational.
* Dapat menyimpan data lebih murah seperti pada Cloud base storage. (Firebase, mLab dsb)
* Menghemat waktu development.
* Membuat skala besar database dengan efisien dengan biaya lebih murah. 
* Disimpan tanpa menggunakan table dan row, karena disimpan dalam bentuk text/json dalam sebuah collection document.

Contoh: 

    User A {
      _id: "001",
      name: "Dyo"
    }

    Post A {
      user: "001",
      content: "Ini postingan pertama saya"
    }

    Post B {
      user: "001",
      Content: "Ini postingan kedua saya"
    }    

## Download NodeJS

[nodejs.org/en/download/](https://nodejs.org/en/download/)

### Install Pada Mac

-> Download yang **recommended for most users**

-> Buka Terminal Mac dan ketik, untuk mengetahui versi NodeJS:

    node -v

-> Untuk mengetahui versi NPM (Node Package Manager) ketik:

    npm -v

*) Untuk memastikan nodejs terinstall dengan baik.

*) NPM digunakan untuk menginstall Additional Library Nodejs lainnya, contoh:

    npm install nama_library --save

### Install Pada Linux

-> Kurang lebih seperti install pada Mac

### Install Pada Windows

**nodejs.org**

-> Download Windows installer dari web tsb.

-> Run installer tsb.

-> Ikuti langkah2 instalasi. 

-> PENTING! Untuk Windows restart Komputer anda.

MongoDB tidak harus di install pada local mesin / server host, bisa menggunakan service pihak ke 3 contoh: mLab.com, firebase.google.com.

## Membuat akun di mlab.com

Buka mlab.com dan buat lah akun disana.

## Teknologi Embeddedjs.com atau ejs

* [embeddedjs.com/](http://www.embeddedjs.com/)
* [ejs.co/](http://ejs.co/)

EJS adalah Template Engine untuk HTML dan Template.

EJS adalah engine yang bertugas membersihkan HTML dari javascript anda dari sisi client. Fungsi javascript yang tidak di butuhkan oleh user akan di buang sehingga loading page akan lebih cepat. Halaman anda akan lebih terorganisir dan rapih.

Untuk project pada kelas ini kita akan menggunakan jQuery dan Ajax.

## Membuat akun di Github.com

github.com(https://github.com/)

**git adalah local code manager**
**github adalah cloud code manager**

## Membuat akun heroku.com

[heroku.com/](https://www.heroku.com/)







---
Copyright &copy;mediocaddemy 2018 
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari PT.Gandrung Media Corporation. Pelanggaran akan hak cipta ini akan kami ajukan ke Institusi Hukum yang berlaku.












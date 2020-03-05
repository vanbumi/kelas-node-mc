![](./img/mc-logo.png)

# Cara Setup MongodDB Atlas.

### by mediocademy.com

Silahkan register ke MongoDB Atlas disini:

mongodb.com

atau

https://cloud.mongodb.com/user#/atlas/register/accountProfile

/> Setelah register anda lanjut login. 

/> pada dashboard, klik menu dropdown dan klik new project > buat project baru namanya terserah anda.

![img-atlas1](./img/img-atlas1.png)

```>``` Klik Build a Cluster.

```>``` Klik Cloud Provider & Region dan Pilih default cloud yaitu AWS dan N.Virginia.

```>``` Klik Cluster Tier pilih M0 Sandbox / Free.

```>``` Lanjut ke Cluster Name, berinama (terserah anda).

```>``` Klik Create Cluster, (Proses nya akan memakan waktu beberapa menit).

Setelah selesai seperti gambar dibawah ini:

![img-atlas2](./img/img-atlas2.png)

```>``` Lihat pada menu disebelah kiri dibawah judul **SECURITY** klik **Database Access**. 

```>``` Klik button ADD NEW USER. Ketik user baru dan passwordnya.

```>``` Pada pilihan ***User Privileges*** pilih default yaitu **Read and write to any database**. 

```>``` Lanjut klik button **Add User**.

![img-atlas3](./img/img-atlas3.png)



```>``` Lihat lagi menu sebelah kiri, dibawah judul SECURITY  klik **Network Access**.

```>``` Pada Tab **IP Whitelis**t, klik ADD IP ADDRESS.

![img-atlas4](./img/img-atlas4.png)

```>``` Anda bisa memilih **Add Current IP Address**: otomotis akan menampilkan IP address anda. 
Atau, 

```>``` **Allow Access From Anywhere**, pada project case ini kita akan memilih **Add Current IP Address**.

```>``` Kembali menu kiri, klik  **Cluster**. 

```>``` Di sebelah kanan klik button **CONNECT** 

```>``` Kemudian klik **Connect Your Application**

``` >``` Pada pilihan 1 **Choose your driver version** pilih **Node.js** dan version nya biarkan default **3.0**.

```>``` Untuk pilihan 2 Anda bisa memilih **Connection String Only** atau **Full Driver Example**.

```>``` Anda copy dan paste kan ke dalam kode anda, sebagai kode akses ke database mongodb.

```>``` Database anda siap 
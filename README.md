
# Contact Web App

Project ini merupakan sebuah aplikasi CRUD berbasis web untuk mendata kontak mahasiswa
yang terdiri atas NPM, Nama Lengkap, Kelas, dan Email.

## Cara Menggunakan
1. Launch XAMPP dan nyalakan mySQL dan Apache.

2. Buat sebuah database pada phpmyadmin yang bernama contact-app seperti berikut:

  `CREATE DATABASE contact-app;`

3. Kemudian, buat sebuah tabel dalam database tersebut dengan nama tabel_kontak dengan field berikut:

  `CREATE TABLE tabel_kontak VALUES (npm int(8) PRIMARY KEY NOT NULL, nama_lengkap text NOT NULL, kelas varchar(5) NOT NULL, email varchar(50) NOT NULL));`

4. Setelah itu, clone repository ini menggunakan git bash dengan cara:

  `git clone https://github.com/rzkybagaskara/Contact-App.git`

5. Import depedencies pada node_module dengan mengetikkan command berikut pada git bash:

  `npm install package.json`

6. Install nodemon dengan command berikut pada git bash:

  `npm install -g nodemon`

7. Terakhir, jalankan pada git bash command berikut untuk menjalankan web app:

  `node app`

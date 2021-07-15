
[##] [Cara Konfigurasi React JS File node_modules, Yarn.lock, & Package.json Menjadi Global]

[####][clone repositori ini didalam direktori global pilihan kamu]

[##] [Jalankan Terminal Command Prompt untuk Clone Main Repo di DRIVE C:]

```bash
   $ git clone https://github.com/admhabits/react-symlink-config.git
```

[##] [Install Semua Package Dependency ]

```bash
   $ yarn install atau npm install
```

[##][Cek folder telah diinstall]
```bash
   $ dir atau ls
```

[1]node_modules 
[2]package.json 
[3]yarn.lock



[##] [Jalankan Terminal Command Prompt untuk Clone Cra-Template Repo di DRIVE D:]

```bash
   $ git clone https://github.com/admhabits/react-config-with-symlink
```

Langkah selanjutnya, buat global simbolic link [ Symlink ] untuk Folder & File dibawah ini :

[1]node_modules 
[2]package.json 
[3]yarn.lock

[##] buka terminal yang mengarah ke drive C:\ dan jalankan 4 baris script berikut :

```bash
	mklink  D:\REPO_FOLDER_PROJECT_KAMU\node_modules C:\CONFIG_FOLDER_PROJECT_GLOBAL\node_modules
```

```bash
	mklink  D:\REPO_FOLDER_PROJECT_KAMU\package.json C:\CONFIG_FOLDER_PROJECT_GLOBAL\package.json
```

```bash
	mklink  D:\REPO_FOLDER_PROJECT_KAMU]\yarn.lock C:\CONFIG_FOLDER_PROJECT_GLOBAL\yarn.lock
```

```bash
	mklink  D:\REPO_FOLDER_PROJECT_KAMU\gitignore C:\CONFIG_FOLDER_PROJECT_GLOBAL\gitignore
```

	[#][Keterangan :]

```bash
	mklink [FOLDER_PROJECT_KAMU] [FOLDER_PROJECT_KONFIGURASI_GLOBAL]
```
	[#####] [mklink = membuatkan perintah symbolic link]

	 [b] [REPO_FOLDER_PROJECT_KAMU]
		[#####][Tempat dimana project react kamu disimpan yang hanya berisi File] [#][public & src]

	 [b] [CONFIG_FOLDER_PROJECT_GLOBAL]
		[#####][Tempat dimana project react kamu disimpan yang hanya berisi File] [#][node_modules, yarn.lock, dan gitignore]

[###] [Pada kasus ini saya menyimpan file global di drive C:\ dan untuk project berada di D:\]
[###] [Sewaktu-waktu saya akan menggunakan file global tersebut dengan project yang lain tanpa harus mendownload ulang]
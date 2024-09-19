## Dasar Git dan GitHub

Git dan GitHub adalah alat penting untuk manajemen versi kode dan kolaborasi proyek. Berikut adalah pengenalan dasar tentang bagaimana menggunakan Git untuk mengelola repositori kode dan GitHub untuk berbagi dan berkolaborasi secara online.

### Apa Itu Git?

Git adalah sistem kontrol versi terdistribusi yang digunakan untuk melacak perubahan pada file proyek. Dengan Git, kamu dapat bekerja pada versi berbeda dari sebuah proyek, menggabungkan perubahan, dan memulihkan versi sebelumnya.

### Instalasi Git

1. **Windows**: Unduh dari [git-scm.com](https://git-scm.com/download/win) dan ikuti petunjuk instalasi.
2. **Mac**: Gunakan `brew install git` jika menggunakan Homebrew, atau unduh dari [git-scm.com](https://git-scm.com/download/mac).
3. **Linux**: Instal dengan perintah:
   ```bash
   sudo apt-get install git
   ```

### Perintah Git Dasar

#### 1. Konfigurasi Git

Konfigurasi Git dengan nama dan email kamu:

```bash
git config --global user.name "Nama kamu"
git config --global user.email "email@domain.com"
```

#### 2. Membuat Repositori Baru

Membuat repositori baru di direktori lokal:

```bash
git init
```

#### 3. Menambahkan File ke Repositori

Menambahkan file baru atau perubahan ke staging area:

```bash
git add nama_file
```

Menambahkan semua file yang berubah:

```bash
git add .
```

#### 4. Membuat Commit

Menyimpan perubahan ke repositori dengan pesan commit:

```bash
git commit -m "Pesan commit"
```

#### 5. Melihat Status

Melihat status file dalam repositori (perubahan yang belum di-commit):

```bash
git status
```

#### 6. Melihat Log Commit

Melihat riwayat commit:

```bash
git log
```

#### 7. Mengubah Cabang (Branch)

Membuat cabang baru:

```bash
git branch nama_cabang
```

Beralih ke cabang lain:

```bash
git checkout nama_cabang
```

#### 8. Menggabungkan Cabang

Menggabungkan cabang lain ke cabang aktif:

```bash
git merge nama_cabang
```

#### 9. Menghapus Cabang

Menghapus cabang yang tidak digunakan:

```bash
git branch -d nama_cabang
```

### Apa Itu GitHub?

GitHub adalah platform berbasis cloud untuk menyimpan repositori Git. GitHub memungkinkan kamu untuk berkolaborasi, mengelola versi kode, dan berbagi proyek dengan orang lain.

### Menghubungkan Git dengan GitHub

#### 1. Membuat Repositori di GitHub

- Masuk ke akun GitHub kamu.
- Klik tombol `New` untuk membuat repositori baru.
- Beri nama repositori, pilih visibilitas, dan klik `Create repository`.

#### 2. Menyambungkan Repositori Lokal ke GitHub

Hubungkan repositori lokal ke repositori GitHub:

```bash
git remote add origin https://github.com/username/nama-repositori.git
```

#### 3. Mengirim Perubahan ke GitHub

Mengirim (push) commit lokal ke repositori GitHub:

```bash
git push -u origin master
```

#### 4. Mengambil Perubahan dari GitHub

Mengambil (pull) perubahan terbaru dari repositori GitHub:

```bash
git pull origin master
```

### Kolaborasi dengan GitHub

#### 1. Forking

- Fork repositori untuk membuat salinan di akun kamu.
- Bekerja di salinan kamu dan buat perubahan.

#### 2. Pull Request

- Setelah membuat perubahan, buat `pull request` untuk mengusulkan perubahan kamu ke repositori asli.

#### 3. Issues

- Menggunakan `Issues` untuk melaporkan bug, mengusulkan fitur baru, atau berdiskusi tentang proyek.

### Perintah Git Lainnya

#### 1. Cloning Repositori

Menduplikasi repositori dari GitHub ke komputer lokal kamu:

```bash
git clone https://github.com/username/nama-repositori.git
```

#### 2. Membatalkan Perubahan

Menghapus perubahan yang belum di-commit:

```bash
git checkout nama_file
```

#### 3. Melihat Perbedaan

Melihat perubahan antara commit atau cabang:

```bash
git diff
```

#### 4. Menghapus File

Menghapus file dari repositori dan staging area:

```bash
git rm nama_file
```

### Tips Tambahan

- **.gitignore**: Gunakan file `.gitignore` untuk mengecualikan file atau direktori tertentu dari repositori.
- **Rebase**: Gunakan `git rebase` untuk merapikan riwayat commit.
- **Stash**: Gunakan `git stash` untuk menyimpan perubahan sementara tanpa commit.

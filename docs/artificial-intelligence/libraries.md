---
sidebar_position: 1
---

Tools 
=====

Tools and libraries for Artificial Intelligence

## Python

Yap, Python. Kenapa python?? Python digunakan dalam Machine Learning, Deep Learning & AI karena penggunaan syntax yang tergolong mudah, mudah untuk dibaca dan dimengerti. Selain itu bahasa pemrograman Python memiliki keunggulan sebagai berikut:

- Banyak Library dan Framework untuk AI/ML
- Memiliki dukungan komunitas yang besar
- Selain digunakan untuk AI/ML Python juga bisa digunakan untuk App Development
- Banyak riset yang menggunakan Python

Download Python: https://www.python.org/downloads/ 

> Note: Disarankan untuk install python versi 3.9 - 3.11
 
## Development Environment
Development environment adalah software yang digunakan untuk menulis, menguji, dan men-debug aplikasi. Development environtment biasa terdapat beberapa alasan yaitu teks editor, package manager, debugger, dan compiler.

### Anaconda

Anaconda adalah sebuah software environtment manager yang sering digunakan dalam proses development AI. Anaconda bisa disebut sebagai virtual environtment dimana setiap project memiliki dependensi dan versi masing masing. Download anaconda pada link berikut: https://docs.anaconda.com/anaconda/install/

Untuk menggunakan Anaconda environtment pada Anaconda terminal kita bisa menginisialisasikan environtment. 
```bash
conda create --name <nama> python=3.8
```

Setelah menginisialisasikan kita bisa mengaktifkan environtment tersebut.
```bash
conda activate <nama>
```

Di dalam environtment kita bisa menginstall library dan tools tools yang tersedia.
```bash
conda install numpy pandas matplotlib
```

Untuk keluar dari environtment kita bisa deactive conda.
```bash
conda deactivate
```

### Jupyter Notebook

Jupyter Notebook adalah suatu aplikasi web open-source yang memungkinkan pengguna untuk melakukan pemrograman, visualisasi dan teks dalam satu teks editor secara bersamaan. Jupyter Notebook bekerja dengan cara membagi setiap blok kode dan teks ke dalam suatu blok yang disebut cell. 

- Cell kode yang digunakan dalam Jupyter Notebook adalah biasanya bebasis Python, namun juga bisa dikostumisasi dengan bahasa pemrograman lain dan 
- Cell teks dalam Jupyter Notebook berbasis Markdown
- Bisa memvisualisasikan suatu gambar, grafik dan lainnya

Untuk bisa menggunakan Jupyter Notebook, kita bisa mendaptkannya dengan bantuan package manager default python yaitu `pip` dengan cara:

```pwsh | bash
pip install jupyter
```

Selanjutnya untuk mengakses aplikasi kita bisa menggunakan:
```pwsh
jupyter notebook
```

### Kaggle

Kaggle adalah suatu aplikasi web yang berisikan platform bagi komunitas data science untuk berbagi informasi, resource dan juga tools. Kaggle bisa dijadikan resource yang sangat baik untuk belajar bagi pemula, menjelajahi kumpulan data, dan juga berdiskusi dalam aspek data science.

- Data Science Competition (Hackkerank versi data science): peserta berlomba lomba untuk membuat model yang terbaik
- Open-source dataset
- Kaggle Notebook & GPU/TPU gratis
- Mini Course gratis
- Forum diskusi

Kaggle: https://www.kaggle.com/

### Google Colab

Google Colab adalah platform berbasis cloud yang memungkinkan kita untuk menulis dan mengeksekusi kode Python dalam format Jupyter Notebook. Google Colab menyediakan akses gratis ke GPU dan TPU, yang mempercepat proses pelatihan model.

- GPU/TPU gratis
- Integrasi dengan Google Drive sebagai Storage
- Kolaborasi realtime dengan tim (mirip Docs, Spreadsheet, dll)

### Visual Studio Code

Visual Studio Code merupakan sebuah IDE yang biasa digunakan dalam development aplikasi. Namun, VS Code memiliki ekstensi Jupyter Notebook yang memungkinkan kita melakukan proses proses yang biasa kita lakukan di Jupyter Notebook di dalam VS Code. 

Untuk setup Jupyter Notebook pada VS Code kita perlu melakukan instalasi VS Code terlebih dahulu, download VS Code pada: https://code.visualstudio.com/download

Setelah melakukan instalasi VS Code, jangan lupa juga install Python dan package `jupyter` seperti cara diatas.

Setelah menginstall VS Code dan Python, masuk ke VS Code dan klik bagian `extension`, cari **Jupyter Notebook** dan install extensionnya.

Terakhir, buat file dengan ekstensi `.ipynb` dan run projekmu

## Python Library

### NumPy

NumPy adalah library fundamental untuk komputasi numerik di Python. Numpy digunakan untuk operasi array multidimensi dan berbagai fungsi matematika untuk operasi aritmatika serta aljabar linier.

- Array multidimensi/Matrix
- Fungsi matematika

```bash
pip install numpy
```

### Pandas

Pandas adalah library yang digunakan untuk manipulasi dan analisis data. Ini menawarkan struktur data yang fleksibel seperti DataFrame(semacam tabel) yang memungkinkan pengguna menangani dan memproses data dalam format tabular.

```bash
pip install pandas
```

### Matplotlib

Matplotlib adalah library untuk membuat visualisasi data dalam bentuk grafik dua dimensi. Ini digunakan untuk membuat plot garis, histogram, scatter plots, dan banyak lagi.

```bash
pip install matplotlib
```

### Seaborn

Seaborn adalah library berbasis Matplotlib yang digunakan untuk membuat visualisasi statistik yang lebih advance.

```bash
pip install seaborn
```

### Scipy

Scipy adalah library untuk komputasi ilmiah yang dibangun berbasis NumPy. Scipy menyediakan modul untuk optimisasi, integrasi, interpolasi, aljabar linier, statistik, dan pemrosesan sinyal.

```bash
pip install scipy
```

### Scikit-learn

Scikit-learn adalah library Machine Learning yang menyediakan alat sederhana dan efisien untuk analisis data prediktif yang mencakup algoritma machine learning untuk klasifikasi, regresi, clustering, dan pengurangan dimensi.

```bash
pip install scikit-learn
```

### Tensorflow

TensorFlow adalah library open-source yang dikembangkan oleh Google untuk Deep Learning dan Neural Network. Tensorflow biasanya digunakan untuk membangun dan melatih model Deep Learning yang kompleks.

```bash
pip install tensorflow
```

### PyTorch

PyTorch adalah library open-source untuk pembelajaran mesin yang dikembangkan oleh Facebook. Ini dikenal karena kemudahannya dalam membangun dan melatih model Deep Learning.

```bash
pip install torch
```
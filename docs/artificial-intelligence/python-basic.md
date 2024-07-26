---
sidebar_position: 3
---

Python Basic
===

Basic Fundamental of Python

## Variabel

Variabel di dalam Python mungkin bisa dibilang mirip dengan variabel yang kita pelajari di sekolah dulu. Misal `x = 10`, yang artinya adalah setiap x adalah 10. Variabel memungkinkan kita untuk menyimpan informasi yang dapat diakses dan dimanipulasi dalam kode. Untuk mendeklarasikan variabel di Python, kita cukup memberikan nama variabel dan menetapkan nilai menggunakan tanda sama dengan (=). Misalnya:

```python
nama = "Alice"         # Variabel bertipe string
umur = 25              # Variabel bertipe integer
tinggi = 1.75          # Variabel bertipe float
menikah = False        # Variabel bertipe boolean
```

Di dalam Python, ada beberapa aturan penamaan variabel:

- Nama variabel harus dimulai dengan huruf atau garis bawah (_).
- Nama variabel bersifat case sensitive, yang artinya `nama` berbeda dengan `Nama`.

Di dalam python ada beberapa tipe data untuk variabel yang bisa kita gunakan di dalam program. Misalnya:

- Integer: Bilangan bulat (ex: `umur = 10`).
- Float: Bilangan desimal (ex: `tinggi = 1.75`).
- String: Urutan karakter (ex: `kata = "word"`).
- Boolean: Biner benar atau salah (ex: `menikah = False` atau `menikah = True`).
- List, Tuple, Dictionary: Struktur data untuk menyimpang koleksi data.

```python
nama = "Budi"
umur = 30
is_student = True

print("Nama:", nama)
print("Umur:", umur)
print("Apakah Mahasiswa:", is_student)

""""
Output:
Nama: Budi
Umur: 30
Apakah Mahasiswa: True
```

## Operator

Operator dalam Python adalah suatu perintah khusus untuk melakukan operasi pada variabel. Python memiliki berbagai jenis operator yang memungkinkan Anda melakukan operasi matematika, logika, dan manipulasi data. Berikut adalah beberapa kategori operator yang umum digunakan dalam Python:

### Operator Aritmatika

Operator aritmatika digunakan untuk melakukan operasi matematika dasar. Misal `x = 10`,

| Simbol Operator | Fungsi | Contoh |
|-----------------|--------|--------|
| `+` | Penjumlahan | `x + 10` = 20 |
| `-` | Pengurangan | `x - 10` = 0|
| `*` | Perkalian | `x * 10` = 100 |
| `/` | Pembagian | `x / 10` = 1 |
| `%` | Modulo (Sisa pembagian) | `x % 8` = 2 |
| `**` | Pemangkatan | `x ** 2` = 100 |
| `//` | Pembulatan pembagian (ke bawah) | `x // 3` = 3 |

```python
a = 10
b = 3

print(a + b)  # 13
print(a - b)  # 7
print(a * b)  # 30
print(a / b)  # 3.3333333333333335
print(a % b)  # 1
print(a ** b) # 1000
print(a // b) # 3
```

### Operator Perbandingan

Operator perbandingan digunakan untuk membandingkan dua nilai dan mengembalikan nilai boolean (True atau False). Misal `x = 5` dan `y = 10`

| Simbol Operator | Fungsi | Contoh |
|-----------------|--------|--------|
| `==` | Sama dengan | `x == y` (False) | 
| `!=` | Tidak sama dengan | `x != y` (True) |
| `>` | Lebih dari | `x > y` (False) |
| `<` | Kurang dari | `x < y` (True) |
| `>=`  | Lebih dari sama dengan | `x*2 >= y` (True) |
| `<=`  | Kurang dari sama dengan | `x*2 <= y` (True) |

atau contoh:
```python
a = 5
b = 10

print(a == b)  # False
print(a != b)  # True
print(a > b)   # False
print(a < b)   # True
print(a >= b)  # False
print(a <= b)  # True
```

### Logical Operator

Operator logika digunakan untuk menggabungkan pernyataan boolean. Misal `x = True` dan `y = False`

| Simbol Operator | Fungsi | Contoh |
|-----------------|--------|--------|
| and | Bernilai `True` jika kedua operand `True` | x and y (False) |
| or | Bernilai `True` jika salah satu operand `True` | x or y (True) |
| not | Nilai kebalikan dari operand awal | not x (False) |

atau contoh:

```python
x = True
y = False

print(x and y)  # False
print(x or y)   # True
print(not x)    # False
```

### Increment Operator

Increment Operator digunakan untuk menetapkan nilai baru ke variabel. Cara menggunakan increment operator adalah dengan menambahkan `=` ke arithmethic operator. Misal `x = 10`

| Simbol Operator | Fungsi | Contoh |
|-----------------|--------|--------|
| += | Penjumlahan nilai sebelumnya | x += 5 (x = 15) |
| -= | Pengurangan nilai sebelumnya | x -= 5 (x = 5) |
| *= | Perkalian nilai sebelumnya | x *= 5 (x = 50) |
| /= | Pembagian nilai sebelumnya | x /= 5 (x = 2) |
| %= | Modulo nilai sebelumnya | x %= 5 (x = 0) |
| **= | Perpangkatan nilai sebelumnya | x **= 5 (x = 10^5) |
| //= | Pembagian bulat nilai sebelumnya | x //= 3 (x = 3) |

atau contoh:

```python
a = 5

a += 3  # a = a + 3, jadi a sekarang 8
a -= 2  # a = a - 2, jadi a sekarang 6
a *= 2  # a = a * 2, jadi a sekarang 12
a /= 4  # a = a / 4, jadi a sekarang 3.0
a %= 2  # a = a % 2, jadi a sekarang 1.0
a **= 3 # a = a ** 3, jadi a sekarang 1.0
a //= 2 # a = a // 2, jadi a sekarang 0.0
```

### Identity Operator

Identity Operator digunakan untuk memeriksa apakah dua variabel mengacu pada objek yang sama di memori. Identity operator menggunakan syntax `is` dan `is not`.

- `is`: bernilai `True` jika kedua variabel mengacu pada objek yang sama
- `is not`: Bernilai True jika kedua variabel tidak mengacu pada objek yang sama

Contoh:

```python
a = [1, 2, 3]
b = a
c = a[:]

print(a is b)      # True, karena b adalah referensi dari a
print(a is not c)  # True, karena c adalah salinan dari a
```

### Member Operators

Operator keanggotaan digunakan untuk memeriksa apakah nilai atau variabel ada di dalam urutan (seperti string, list, tuple, dll).

- `in`: Bernilai `True` jika nilai ditemukan dalam urutan
- `not in`: Bernilai `True` jika nilai tidak ditemukan dalam urutan

```python
list_items = [1, 2, 3, 4, 5]

print(3 in list_items)     # True
print(6 not in list_items) # True
```



## Conditional Statement

Dalam program harus ada yang mengontrol flow dari program kita. Maka kita memerlukan conditional statement untuk hal tersebut. Struktur utama dari conditional statements di Python adalah `if`, `elif`, dan `else`. Kontrol program bisa kita peroleh jika suatu hal terjadi atau memenuhi syarat. Contohnya, jika nilai UTBK kita lebih dari 700 maka kita bisa masuk Teknologi Informasi ITS, jika nilai kita lebih dari 600 dan kurang dari 700 kita akan masuk Teknik Informatika ITS, tetapi jika kurang dari 600 maka kita akan masuk ke Teknologi Informasi Universitas Brainrot Indonesia.

```python
nilai_utbk = 711

if nilai_utbk > 700:
    print("Selamat kamu berhasil masuk Teknologi Informasi ITS :)")
elif nilai_utbk > 600:
    print("Selamat kamu berhasil masuk Teknik Informatika ITS!!")
else:
    print("Yahhh kamu masuk Teknologi Informasi Universitas Brainrot Indonesia :(")

"""
Output:
Selamat kamu berhasil masuk Teknologi Informasi ITS :)
"""
```

## Pengulangan

Pengulangan, seperti namanya berarti suatu pengulangan terhadap suatu hal. Dalam programming dan Python, pengulangan yang dimaksud adalah pengulang eksekusi blok kode. Pengulangan diperlukan didalam pemrograman untuk membuat kode yang lebih simpel dan mudah dibaca. Loop dalam python ada 2 macam, yaitu `for` dan `while`. 

### For

`for` loop for digunakan untuk mengulangi item dalam urutan (seperti string, list, tuple, dll) atau objek lain yang dapat diiterasi (iterable).

```python
numbers = [1, 2, 3, 4, 5]
for number in numbers:
    print(number)

"""
Output:
1
2
3
4
5
"""
```

### While 

Loop while digunakan untuk mengulangi blok kode selama kondisi yang diberikan bernilai True.

```python
count = 1
while count <= 5:
    print(count)
    count += 1

"""
Output:
1
2
3
4
5
"""
```

### Break

`break` digunakan untuk menghentikan loop sebelum waktunya ketika kondisi tertentu terpenuhi.

```python
for number in range(5):
    if number == 3:
        break
    print(number)


"""
Output:
1
2
3
"""
```

### Continue

`continue` digunakan untuk melewati iterasi saat ini dan melanjutkan ke iterasi berikutnya.

```python
for number in range(10):
    if number % 2 == 0:
        continue
    print(number)

"""
Output:
1
3
5
7
9
"""
```

## Fungsi

Seperti pada matematika, fungsi pada dalam pemrograman dan Python merupakan suatu variabel yang dipetakan ke suatu blok kode. Untuk mendefinisikan fungsi, bisa menggunakan syntax `def` diikuti nama fungsi dan parameternya, serta diakhiri dengan titik dua (:). Untuk menggunakan blok kode tadi kita harus memanggil fungsi tersebut dengan `<nama_fungsi>(parameter_fungsi)`

Contoh jika fungsi tidak dipanggil:

```python
def halo():
    print('hai')

greet()
"""
Output:
"""
```


Contoh jika fungsi dipanggil:

```python
def halo():
    print('hai')

greet()

"""
Output:
hai
"
```

### Parameter Fungsi

Fungsi dapat mengambil satu atau lebih parameter sebagai input, sehingga memungkinkan kita untuk memberikan data yang berbeda ke dalam suatu fungsi.

Contoh:

```python
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")

"""
Output:
Hello, Alice!"
"""
```

### Fungsi dengan Nilai Kembali

Fungsi dapat mengembalikan nilai menggunakan pernyataan `return`. Nilai yang dikembalikan ini bisa kita masukkan kembali ke dalam suatu variabel atau bisa kita gunakan untuk fungsi yang lain.

```python
def add(a, b):
    return a + b

result = add(3, 5)
print(result)

"""
Output:
8
"""
```
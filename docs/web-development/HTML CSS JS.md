Modul untuk HTML, CSS, dan JavaScript dasar

---

# HTML, CSS, and JavaScript Basics

## HTML Basics

HTML (Hypertext Markup Language) adalah bahasa standar untuk membuat halaman web. HTML menyediakan struktur untuk konten web menggunakan elemen-elemen seperti tag dan atribut.

### Struktur Dasar HTML

Struktur dasar sebuah dokumen HTML adalah sebagai berikut:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Title of the Document</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

- `<!DOCTYPE html>`: Mendeklarasikan tipe dokumen HTML5.
- `<html>`: Elemen root dari dokumen HTML.
- `<head>`: Berisi metadata dan link ke file CSS.
- `<body>`: Berisi konten yang ditampilkan di halaman web.

### Elemen HTML Umum

- **Heading**: `<h1>` hingga `<h6>` untuk judul.
- **Paragraph**: `<p>` untuk paragraf.
- **Anchor**: `<a href="url">` untuk link.
- **Image**: `<img src="url" alt="description">` untuk gambar.
- **List**: `<ul>` (unordered list) dan `<ol>` (ordered list) untuk daftar, dengan `<li>` untuk item.

```html
<h1>Main Heading</h1>
<p>
  This is a paragraph with <a href="https://example.com">a link</a> and an
  image:
</p>
<img src="image.jpg" alt="Description of the image" />
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

## CSS Basics

CSS (Cascading Style Sheets) digunakan untuk mengatur tampilan dan layout dari elemen-elemen HTML. CSS dapat ditambahkan ke HTML melalui inline styles, internal styles, atau external styles.

### Menambahkan CSS

1. **Inline CSS**: Menambahkan style langsung pada elemen HTML.

   ```html
   <p style="color: blue; font-size: 16px;">This is a blue text.</p>
   ```

2. **Internal CSS**: Menambahkan style di dalam tag `<style>` di bagian `<head>` dokumen HTML.

   ```html
   <style>
     p {
       color: blue;
       font-size: 16px;
     }
   </style>
   ```

3. **External CSS**: Menghubungkan file CSS eksternal dengan tag `<link>` di bagian `<head>`.

   ```html
   <link rel="stylesheet" href="styles.css" />
   ```

### Selektor CSS

- **Tag Selector**: Menargetkan elemen berdasarkan tag-nya.

  ```css
  p {
    color: blue;
  }
  ```

- **Class Selector**: Menargetkan elemen dengan atribut `class`.

  ```css
  .highlight {
    background-color: yellow;
  }
  ```

  ```html
  <p class="highlight">This text has a yellow background.</p>
  ```

- **ID Selector**: Menargetkan elemen dengan atribut `id`.

  ```css
  #unique {
    font-weight: bold;
  }
  ```

  ```html
  <p id="unique">This text is bold.</p>
  ```

### Properti CSS Umum

- **Color**: Menentukan warna teks.

  ```css
  color: red;
  ```

- **Background**: Menentukan warna latar belakang.

  ```css
  background-color: lightblue;
  ```

- **Font-size**: Menentukan ukuran font.

  ```css
  font-size: 20px;
  ```

- **Margin**: Menentukan jarak luar elemen.

  ```css
  margin: 10px;
  ```

- **Padding**: Menentukan jarak dalam elemen.

  ```css
  padding: 10px;
  ```

## JavaScript Basics

JavaScript adalah bahasa pemrograman yang digunakan untuk menambahkan interaktivitas dan logika ke halaman web. JavaScript dapat disematkan langsung dalam HTML atau dihubungkan melalui file eksternal.

### Menambahkan JavaScript

1. **Inline JavaScript**: Menambahkan kode JavaScript langsung pada atribut `onclick`, `onchange`, dll.

   ```html
   <button onclick="alert('Hello World!')">Click Me</button>
   ```

2. **Internal JavaScript**: Menambahkan kode JavaScript di dalam tag `<script>` di bagian `<head>` atau sebelum tag penutup `</body>`.

   ```html
   <script>
     function greet() {
       alert("Hello, World!");
     }
   </script>
   ```

3. **External JavaScript**: Menghubungkan file JavaScript eksternal dengan tag `<script>`.

   ```html
   <script src="script.js"></script>
   ```

### Sintaks Dasar JavaScript

- **Variabel**: Mendeklarasikan variabel dengan `var`, `let`, atau `const`.

  ```javascript
  let name = "Alice";
  const age = 25;
  ```

- **Fungsi**: Mendefinisikan fungsi dengan `function` keyword.

  ```javascript
  function greet(name) {
    return `Hello, ${name}!`;
  }
  ```

- **Kondisi**: Menggunakan `if`, `else if`, dan `else` untuk pengkondisian.

  ```javascript
  let score = 85;

  if (score > 90) {
    console.log("Excellent");
  } else if (score > 70) {
    console.log("Good");
  } else {
    console.log("Needs Improvement");
  }
  ```

- **Loop**: Menggunakan `for` dan `while` untuk pengulangan.

  ```javascript
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  let count = 0;
  while (count < 5) {
    console.log(count);
    count++;
  }
  ```

- **Event Handling**: Menangani event seperti klik dengan menambahkan event listeners.

  ```javascript
  document.querySelector("button").addEventListener("click", function () {
    alert("Button clicked!");
  });
  ```

---

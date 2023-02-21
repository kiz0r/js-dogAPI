'use strict';

// 1) Зробити запит даних до одного із серверів (одного з API) на вибір, використовуючи fetch()
// 2) Відобразити дані на сторінці за допомогою DOM
// 3) * Прикрасити стилями за потребою

// - Випадкове зображення собаки https://dog.ceo/api/breeds/image/random
// Наприклад, при натисканні на кнопку або саме зображення змінювати зображення на нове рандомне.

const changeBtn = document.querySelector('.changeBtn');

changeBtn.onclick = loadImage;

function loadImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((result) => setImage(result.message))
    .catch((e) => console.log(e));
}

function setImage(url) {
  const img = document.querySelector('.dogImg');

  img.src = url;

  return img;
}

loadImage();

//1
let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');
let but1 = document.getElementById('but1');
but1.onclick = function() {
    const bodyChildren = document.body.children;
    console.log(bodyChildren.length)
    for (let i = 0; i < bodyChildren.length; i++) {
        div1.innerHTML += bodyChildren[i].outerHTML + '<br>';
    }

    const allElements = document.all;
    let lengh3 = allElements.length;
    for (let i = 0; i < lengh3; i++) {
        div2.innerHTML += allElements[i].outerHTML + '<br>';
    }
}

//2
let myList = document.getElementById('list2');
let but21 = document.getElementById('but21');
but21.onclick = function() {
    let newElement = document.createElement('li');
    newElement.textContent = 'элемент в начало';
    myList.prepend(newElement);
}

let but22 = document.getElementById('but22');
but22.onclick = function() {
    let newElement = document.createElement('li');
    newElement.textContent = 'элемент в конец';
    myList.appendChild(newElement);

}
let but23 = document.getElementById('but23');
but23.onclick = function() {
    let listItems = document.querySelectorAll('#list2 li');
    listItems.forEach((item, index) => {
    if (index % 2 !== 0) {
        item.classList.toggle('odd');
    }}
    ) 
}

//3
let res3 = document.getElementById("res3");
let element1 = document.getElementById('div32');

let element2 = document.querySelector('#div32');

let parentElement = document.getElementById('div31');
let element3 = parentElement.querySelector('#div32');

if (element1 === element2 && element2 === element3) {
    res3.innerHTML += ' Переменные ссылаются на один и тот же узел.';
} else {
    res3.innerHTML += ' Переменные не ссылаются на один и тот же узел.';
}

//4
const pics = ['src/pic1.jpg', 'src/pic2.jpg', 'src/pic3.jpg', 'src/pic4.png', 'src/pic5.png'];
const captions = ['майнкрафт это моя жизнь', 'уставший Денджи', 'с днем ванписа', 'пьет пиво', 'ура роблокс'];

let currentIndex4 = 0;
const pic4 = document.getElementById('pic4');
const caption = document.querySelector('figcaption');

function changeImage() {
    currentIndex4 = (currentIndex4 + 1) % pics.length;
    pic4.src = pics[currentIndex4];
    caption.textContent = captions[currentIndex4];
}

pic4.addEventListener('click', changeImage);

//5
const slides = document.querySelector('.slides');
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
let slideIndex = 0;

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 95}%)`;
}

prevBtn.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + 5) % 5;
  showSlide(slideIndex);
});

nextBtn.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % 5;
  showSlide(slideIndex);
});

//6
const link = document.getElementById('link6');
const res6 = document.getElementById('res6');

const but61 = document.getElementById('button61');
but61.addEventListener('click', function() {
    link.href = 'https://vk.com/aquezzo';
    res6.innerHTML = 'https://vk.com/aquezzo';
});

const but62 = document.getElementById('button62');
but62.onclick = function() {
    link.setAttribute('href', 'https://t.me/xte1l');
    res6.innerHTML = 'https://t.me/xte1l';
};

function changeLink() {
    link.href = 'https://github.com/AQZ89';
    res6.innerHTML = 'https://github.com/AQZ89';
}

const but63 = document.getElementById('button63');
but63.addEventListener('click', changeLink);

//7
// Создание таблицы
let table = document.createElement('table');

// Создание ячеек и добавление их в таблицу
for (let i = 0; i < 5; i++) {
let row = table.insertRow();
for (let j = 0; j < 4; j++) {
    let cell = row.insertCell();
    cell.textContent = 'Ячейка ' + (j + 1) + '-' + (i + 1);
    cell.id = `cell${i}${j}`
    cell.style.textAlign = 'center';
    cell.style.verticalAlign = 'middle';
    if (i === 0 || i === 4) {
        cell.style.fontWeight = 'bold';
    }
    if (j === 1 || j === 2) {
        cell.style.backgroundColor = 'lightgrey';
    }
    if (j === 3) {
        cell.style.backgroundColor = 'lightgreen';
    }
}
}

document.getElementById("sevennum").appendChild(table);

document.getElementById('cell00').innerHTML = "Признаки"
document.getElementById('cell01').innerHTML = "Сычи"
document.getElementById('cell02').innerHTML = "Ушастые совы"
document.getElementById('cell03').innerHTML = "Филин"

document.getElementById('cell10').innerHTML = "Количество видов"
document.getElementById('cell11').innerHTML = "3"
document.getElementById('cell12').innerHTML = "6"
document.getElementById('cell13').innerHTML = "16"

document.getElementById('cell20').innerHTML = "Большие уши"
document.getElementById('cell21').innerHTML = "❌"
document.getElementById('cell22').innerHTML = "✔️"
document.getElementById('cell23').innerHTML = "✔️"

document.getElementById('cell30').innerHTML = "Латинское наименование"
document.getElementById('cell31').innerHTML = "Athene"
document.getElementById('cell32').innerHTML = "Asio"
document.getElementById('cell33').innerHTML = "Bubo"

document.getElementById('cell40').innerHTML = "итого по размерам"
document.getElementById('cell41').innerHTML = "Худые"
document.getElementById('cell42').innerHTML = "Средние"
document.getElementById('cell43').innerHTML = "Жирные"


//1
let a = document.body.children;
console.log(a);

// Создаем функцию для вывода типа узла
let nodes1 = function() {
    let el1 = document.getElementById('item1');
    let el2 = document.getElementById('item2');
    console.log(`Тип первого узла: ${el1.nodeType}`);
    console.log(`Тип второго узла: ${el2.nodeType}`)
}
nodes1();

//2
let monthslist = document.getElementById('monthstxt');
let but2 = document.getElementById('but2');
let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
but2.onclick = function() {
    let table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    table.style.border = '1px solid black';

    let thead = document.createElement('thead');
    thead.style.borderCollapse = 'collapse';
    thead.style.border = '1px solid black';

    let tbody = document.createElement('tbody');
    tbody.style.borderCollapse = 'collapse';
    tbody.style.border = '1px solid black';

    let theaderRow = document.createElement('tr');
    let headerc1 = document.createElement('th');
    headerc1.textContent = '№';
    let headerc2 = document.createElement('th');
    headerc2.textContent = 'Название месяца';

    theaderRow.appendChild(headerc1);
    theaderRow.appendChild(headerc2);
    thead.appendChild(theaderRow);
    table.appendChild(thead);

    months.forEach((month, index) => {
        let tableRow = document.createElement('tr');
        let cell1 = document.createElement('td');
        cell1.textContent = (index + 1).toString();
        let cell2 = document.createElement('td');
        cell2.textContent = month;

        tableRow.appendChild(cell1);
        tableRow.appendChild(cell2);
        tbody.appendChild(tableRow);
    });

    table.appendChild(tbody);

    document.getElementById("two").appendChild(table);
}

//3
let list = document.getElementById("monthstxt");
let but3 = document.getElementById('but3');
but3.onclick = function() {
    let newrow = document.createElement("month13");
    newrow.appendChild(document.createTextNode("13-го месяца не бывает"));
    list.appendChild(newrow);
}

//4
let but4 = document.getElementById('but4')
but4.onclick = function() {
    let list = document.getElementById("monthstxt");
    let listItem = list.getElementsByTagName("li")[12];
    let markedlist = document.createElement("ul");
    let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    for (let i = 0; i < week.length; i++) {
        let listItem = document.createElement("li");
        listItem.appendChild(document.createTextNode(week[i]));
        markedlist.appendChild(listItem);
    }
    listItem.appendChild(markedlist);
}

//5
let but5 = document.getElementById('but5');
but5.onclick = function() {
    let headers = document.getElementById("main").querySelectorAll('h1, h2, h3, h4, h5, h6');
    headers.forEach(header => {
        console.log(header.textContent);
    });
};

//7
let but7 = document.getElementById('but7');
but7.onclick = function() {
    let results = document.getElementById('results');
    results.innerHTML = '';

    let q1Answer = document.querySelector('input[name="q1"]:checked').value;
    let q2Answers = Array.from(document.querySelectorAll('input[name="q2"]:checked')).map(input => input.value);
    let q3Answer = document.querySelector('input[name="q3"]:checked').value;
    let q4Answers = Array.from(document.querySelectorAll('input[name="q4"]:checked')).map(input => input.value);
    let q5Answer = document.getElementById('q5').value;

    let incorrectAnswers = [];

    if (q1Answer !== 'a13') {
        incorrectAnswers.push('1 вопрос мимо');
    }

    if (!(q2Answers.includes('a21')) || !(q2Answers.includes('a22')) || q2Answers.includes('a23')) {
        incorrectAnswers.push('2 вопрос мимо');
    }

    if (q3Answer !== 'a31') {
        incorrectAnswers.push('3 вопрос мимо');
    }

    if (!(q4Answers.includes('a41')) || q4Answers.includes('a42') || !(q4Answers.includes('a43'))) {
        incorrectAnswers.push('4 вопрос мимо');
    }

    if (q5Answer.toLowerCase() !== 'напишите') {
        incorrectAnswers.push('5 вопрос мимо');
    }

    if (incorrectAnswers.length === 0) {
        results.innerHTML = 'харош';
    } else {
        results.innerHTML = 'ты завалил почти все вопросы, а именно:<br>' + incorrectAnswers.join('<br>');
    }
};
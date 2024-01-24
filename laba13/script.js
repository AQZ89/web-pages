//1

letrofl = function() {
    //document.write('<img src="src/kaboom.gif" id = "gif1">');
    let test = document.getElementById("eight");
    test.insertAdjacentHTML('afterend', '<img src="src/kaboom.gif" id="gif1">');
    setTimeout(() => {
        document.getElementById("gif1").src = "";
    }, 1300);
}



let date = new Date();
let months = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "январь", ]
let additionaltxt = ". Текущая пора содержит следющие месяцы: ";

if (date.getMonth() == 0 || date.getMonth() == 1 || date.getMonth() == 11) {
    additionaltxt += "декабрь, январь и февраль.";
} else {
    if (date.getMonth() == 2 || date.getMonth() == 3 || date.getMonth() == 4) {
        additionaltxt += "март, апрель и май.";
    } else {
        if (date.getMonth() == 5 || date.getMonth() == 6 || date.getMonth() == 7) {
            additionaltxt += "июнь, июль и август.";
        } else {
            additionaltxt += "сентябрь, октябрь и ноябрь.";
        }
    }
}
document.getElementById("one").innerHTML += `<div>Сейчас ${months[date.getMonth()] + additionaltxt}<br></div>`

//2
const but2 = document.getElementById("but2");
but2.onclick = function() {
    letrofl();
    let date2 = new Date();
    let birth = new Date(document.getElementById("in2").value);
    let age = date2.getFullYear() - birth.getFullYear();
    console.log(age);
    document.getElementById("two").innerHTML += `Персонажу около ${age} лет.<br>`
}

//3
let start;
let stop;
const but31 = document.getElementById("but31");
const but32 = document.getElementById("but32");
but31.onclick = function() {
    start = Date.now();
}
but32.onclick = function() {
    letrofl();
    stop = Date.now()
    document.getElementById("three").innerHTML += `Между кликами прошло ${stop - start} мс.<br>`
}

//4_1
const but41 = document.getElementById("but41");
but41.onclick = function() {
    letrofl();
    let array41 = [];
    array41[0] = +document.getElementById("in411").value;
    array41[1] = +document.getElementById("in412").value;
    array41[2] = +document.getElementById("in413").value;
    array41[3] = +document.getElementById("in414").value;
    array41[4] = +document.getElementById("in415").value;
    let resarray = array41.sort((a, b) => { return a - b });
    document.getElementById("four1").innerHTML += `Самое низкое значение из введенных: ${resarray[0]}<br>`
}

//4_2
const but42 = document.getElementById("but42");
but42.onclick = function() {
    letrofl();
    let longword = String(document.getElementById("in421").value);
    let shortword = String(document.getElementById("in422").value);
    console.log(longword, shortword);
    document.getElementById("four2").innerHTML += `Подстрока начинается на ${longword.indexOf(shortword)} позиции.<br>`
}

//5
let example = {
    isOdd: function(arg) {
        if (arg % 2 == 1) return true
        else return false;
    }
};

Number.__proto__ = example;

const but5 = document.getElementById("but5");
but5.onclick = function() {
    letrofl();
    let argg = document.getElementById("in5").value;
    let value = Number.isOdd(argg);
    document.getElementById("five").innerHTML += `Возвращено ${value}. Значение ${value?'не':''}четное.<br>`
}

//6
const but6 = document.getElementById("but6");
but6.onclick = function() {
    letrofl();
    let sergeidebil = document.getElementById("in6").value;
    let isHereSergei = false;
    if (!(sergeidebil.search(/\d.*/g))) {
        isHereSergei = true;
    } else isHereSergei = false;
    document.getElementById("six").innerHTML += `${isHereSergei?"Да, начинается":"Нет, не начинается"}<br>`
}

//7
const but7 = document.getElementById("but7");
but7.onclick = function() {
    letrofl();
    let sergeidebil7 = document.getElementById("in71").value;
    let exsergeition7 = new RegExp(String(document.getElementById("in72").value));
    let isHereSergei7 = false;
    if (!(sergeidebil7.search(exsergeition7))) {
        isHereSergei7 = true;
    } else isHereSergei7 = false;
    document.getElementById("seven").innerHTML += `${isHereSergei7?"Да, начинается":"Нет, не начинается"}<br>`
}

//8
const but8 = document.getElementById("but8");
but8.onclick = function() {
    letrofl();
    let sergei = document.getElementById("in8").value;
    let splitSergei = sergei.split('');
    let reverseSergei = splitSergei.reverse();
    let joinSergei = reverseSergei.join('');
    document.getElementById("eight").innerHTML += `${(joinSergei == sergei)?"Да, читается":"Нет, не читается"}<br>`
}
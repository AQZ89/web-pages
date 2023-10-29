let array1 = [];
let size = 20;
//fill array
for (let i = 0; i < size; i++) {
    array1[i] = Math.round(Math.random() * 50)
}

let visual1 = document.getElementById("one");
let visual2 = document.getElementById("two");
//show array
for (let i = 0; i < size; i++) {
    visual1.innerHTML += `${array1[i]} `
}

let ask = window.prompt("Сколько последних элементов вывести?")

for (let i = (size - ask); i < 20; i++) {
    visual2.innerHTML += `${array1[i]} `
}
let array2 = [...array1]
let maxnum = array2.sort(function(a, b) { return a - b })[array2.length - 1];
let index = 0;
for (let i = 0; i < size; i++) {
    if (array1[i] == maxnum) {
        index = i;
    }
    console.log(index);
}

////
visual2.innerHTML += `<br>Индекс максимального элемента (${maxnum}): ${index} `

let visual3 = document.getElementById("three");
let array01 = ["father", 89, 432, {
    lol: "emptyProperty",
    lmao: "anotherProperty"
}];
for (let i = 0; i < array01.length; i++) {
    if (i != array01.length - 1) {
        visual3.innerHTML += `${i} - ${array01[i]}, `
    } else {
        visual3.innerHTML += `${i} - ${array01[i]}.`
    }
}
visual3.innerHTML += `<br>`

let array02 = new Array(48359, 859, 473, 42436, 34647);
for (let i = 0; i < array02.length; i++) {
    if (i != array02.length - 1) {
        visual3.innerHTML += `${i} - ${array02[i]}, `
    } else {
        visual3.innerHTML += `${i} - ${array02[i]}.`
    }
}
visual3.innerHTML += `<br>`

let array03 = Array.of("я", "держу", "детей", "в", "подвале");
for (let i = 0; i < array03.length; i++) {
    if (i != array03.length - 1) {
        visual3.innerHTML += `${i} - ${array03[i]}, `
    } else {
        visual3.innerHTML += `${i} - ${array03[i]}.`
    }
}
visual3.innerHTML += `<br><br>Массив из всех массивов:<br>`

let array123 = [...array01, ...array02, ...array03];
for (let i = 0; i < array123.length; i++) {
    visual3.innerHTML += `${i} --- ${array123[i]}<br>`
}
let arraycopy = [...array123];

const logs = document.getElementById("logs");
let butsplice = document.getElementById("splice");
butsplice.onclick = function() {
    let a = document.getElementById("inSplice1").value;
    let b = document.getElementById("inSplice2").value;
    let deleted1 = array123.splice(a, b);
    logs.innerHTML += `Из массива были удалены элементы `
    for (let i = 0; i < deleted1.length; i++) {
        if (i != deleted1.length - 1) {
            logs.innerHTML += `${deleted1[i]}, `
        } else {
            logs.innerHTML += `${deleted1[i]}.`
        }
    }
    logs.innerHTML += `<br>(можно проверить через <b>console.log(array123)</b>)`
}

let butshift = document.getElementById("shift");
butshift.onclick = function() {
    arraycopy.shift();
    console.log(arraycopy);
    logs.innerHTML += `${arraycopy[0]} теперь первый элемент<br>`
}

let butpop = document.getElementById("pop");
butpop.onclick = function() {
    arraycopy.pop();
    console.log(arraycopy);
    logs.innerHTML += `${arraycopy[arraycopy.length-1]} теперь последний элемент<br>`
}

let butunshift = document.getElementById("unshift");
butunshift.onclick = function() {
    let a = document.getElementById("inUnshift").value;
    arraycopy.unshift(a);
    console.log(arraycopy);
    logs.innerHTML += `Массив теперь выглядит так: ${arraycopy}<br>`
}

let butpush = document.getElementById("push");
butpush.onclick = function() {
    let a = document.getElementById("inPush").value;
    arraycopy.push(a);
    console.log(arraycopy);
    logs.innerHTML += `Массив теперь выглядит так: ${arraycopy}<br>`
}

let butdelete = document.getElementById("delete");
butdelete.onclick = function() {
    let a = document.getElementById("inDelete").value;
    delete arraycopy[a];
    console.log(arraycopy);
    logs.innerHTML += `Массив теперь выглядит так: ${arraycopy}<br>`
}

let butshow = document.getElementById("show");
butshow.onclick = function() {
    let showarray = arraycopy.filter((el) => { return el; });
    console.log(showarray);
    logs.innerHTML += `Длина массива: ${arraycopy.length}, где элементов - ${showarray.length}<br>Массив теперь выглядит так:<br>`
    for (let i = 0; i < showarray.length; i++) {
        if (i != showarray.length - 1) {
            logs.innerHTML += `${i}. ${showarray[i]}, `
        } else {
            logs.innerHTML += `${i}. ${showarray[i]}.`
        }
    }
}

// все способы отчищают массив
copymassiv4.length = 0;
copymassiv4.splice(0, copymassiv4.length);
console.log(copymassiv4);
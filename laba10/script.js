let array1 = [];
let size = 20;
//fill array
for(let i = 0; i < size; i++) {
    array1[i] = Math.round(Math.random()*50)
}

let visual1 = document.getElementById("one");
let visual2 = document.getElementById("two");
//show array
for(let i = 0; i < size; i++) {
    visual1.innerHTML += `${array1[i]} `
}

let ask = window.prompt("Сколько последних элементов вывести?")

for(let i = (size-ask); i<20; i++) {
    visual2.innerHTML += `${array1[i]} `
}
let array2 = [...array1]
let maxnum = array2.sort(function(a,b) {return a - b})[array2.length-1];
let index = 0;
for(let i = 0; i < size; i++) {
    if(array1[i] == maxnum) {
        index = i;
    }
    console.log(index);
}

visual2.innerHTML += `<br>Индекс максимального элемента (${maxnum}): ${index} `
let randValues = [];

//1
const but1 = document.getElementById("but1");
but1.onclick = function() {
    let a = document.getElementById("in1_1").value;
    let b = document.getElementById("in1_2").value;
    document.getElementById("one").innerHTML += `${a**(b?b:1)}<br>`
}

//2
const but2 = document.getElementById("but2");
but2.onclick = function() {
    let a = document.getElementById("in2").value - 1;
    let months = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"]
    document.getElementById("two").innerHTML += `${months[a]}.<br>`
}

//3
const disp3 = document.getElementById("three");
let size = 20;
let array1 = [];
for (let i = 0; i < size; i++) {
    array1[i] = Math.round(Math.random() * 200);
    disp3.innerHTML += `${array1[i]}${(i != size-1)?",":"."} `;
}
let maxnum = array1.sort((a, b) => { return b - a })[0];
disp3.innerHTML += `<br>Максимальное число массива - ${maxnum}, находится в диапазоне `;
if (maxnum < 10) {
    disp3.innerHTML += ` от 0 до 9.`;
} else if (maxnum < 101) {
    disp3.innerHTML += ` от 10 до 100.`;
} else {
    disp3.innerHTML += ` свыше 100`;
}

//4
let repeat = function(str, n) {
    if (!n) n = 2;
    let res = '';
    for (let i = 0; i < n; i++) {
        res += str;
    }
    return res;
}
const but4 = document.getElementById("but4");
but4.onclick = function() {
    let str = document.getElementById("in4_1").value;
    let n = document.getElementById("in4_2").value;
    console.log(str, n);
    let res4 = repeat(str, n)
    console.log(res4);
    document.getElementById("four").innerHTML += res4;
}

//5
function calc(a, b, c) {
    let res = a * b / c;
    return res;
}

const but5 = document.getElementById("but5");
but5.onclick = function() {
    const disp5 = document.getElementById("five");
    let a = document.getElementById("in5_1").value;
    let b = document.getElementById("in5_2").value;
    let c = document.getElementById("in5_3").value;
    disp5.innerHTML += calc(a, b, c);
    disp6.innerHTML += ``;
}

//6
let add = function(n) {
    let sum = 0;
    return function(n) {
        let res = n + Math.round(Math.random() * 10);
        sum += res;
        console.log(sum);
        return res;
    }
}
const addN = add();

const disp6 = document.getElementById("six");
let but6 = document.getElementById("but6");
but6.onclick = function() {
    console.log("поулчилось")
    disp6.innerHTML += `тест`;
    let n = document.getElementById("in6").value;
    disp6.innerHTML += `Получилось ${addN(+n)}`;
}
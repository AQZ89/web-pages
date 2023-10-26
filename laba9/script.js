const elem6 = document.getElementById("elem6");
let sum = 0;

let buts = []

for(let i = 0; i < 5; i++) {
    buts[i] = document.getElementById(`but${i}`);
    buts[i].onclick = function() {sum += this.textContent};
}
buts[5] = document.getElementById(`but5`);
buts[5].onclick = function() {alert(`Сумма = ${sum}, привет от жаваскрипта\n(я знаю что надо после переменной добавить + чтобы string стал int'ом, это фича)`); sum = 0;}


let name = window.prompt("Who's there? (admin, cancel, other)");
if(name.toLowerCase() == "cancel") {
    alert("canceled");
}
if(name.toLowerCase() == "other") {
    alert("idk who're you");
}
if(name.toLowerCase() == "admin") {
    let name2 = window.prompt("Password: (i am main, cancel, other)");
    if(name2.toLowerCase() == "cancel") {
        alert("canceled");
    }
    if(name2.toLowerCase() == "other") {
        alert("idk who're you");
    }
    if(name2.toLowerCase() == "i am main") {
        alert("you're welcome");
    }
}

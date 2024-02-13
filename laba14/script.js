//1
let but11 = document.getElementById("but11");
let but12 = document.getElementById("but12");

but11.onclick = function() {
    window.open('https://google.com', '-', 'width=200,height=200,toolbar=no,menubar=no,status=yes,location=no,resizable=yes,scrollbars=yes');
}
but12.onclick = function() {
    window.open('https://google.com', '-', 'width=400,height=400,toolbar=yes,menubar=yes,status=yes,location=no,resizable=yes,scrollbars=no');
}

//2
let link2 = document.getElementById('link2');
link2.onclick = function() {
    window.history.back()
}

//3 
let but31 = document.getElementById('but31');
let but32 = document.getElementById('but32');
but31.onclick = function() {
    alert(`${document.documentElement.scrollHeight?'есть':'нет'}`)
}
let window32;
but32.onclick = function() {
    window32 = window.open('', '_blank', 'width=400,height=400,toolbar=yes,menubar=yes,status=yes,location=no,resizable=yes');
    window32.resizeTo(400, Math.floor(Math.random() * 200 + 400))
    setInterval(() => {
        window32.resizeTo(400, Math.floor(Math.random() * 200 + 400))
    }, 2500)
}

//4
let user;
let int;
let but4 = document.getElementById('but4');
but4.onclick = function() {
    user = prompt("Введите имя пользователя");
    int = prompt("Введите интервал (в секундах)");
    setInterval(() => {
        alert(`Салам, ${user}`)
    }, int * 1000)
}
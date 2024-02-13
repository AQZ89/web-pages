//2
let but2 = document.getElementById('but2');
let buttonClickCount = 0;
but2.onclick = function() {
    let textField = document.getElementById("in1");
    if (buttonClickCount === 0) {
        textField.value = "текстовое поле";
    } else {
        if (textField.classList.contains("red")) {
            textField.classList.remove("red");
            textField.classList.add("green");
        } else {
            textField.classList.remove("green");
            textField.classList.add("red");
        }
    }
    buttonClickCount++;
}

//3
let res3 = document.getElementById('but3')
res3.onclick = function() {
    let in3 = document.getElementById('in3').value;
    let str = prompt('Какую подстроку найти:');
    if (in3.includes(str)) {
        alert('есть такое');
    } else {
        alert('ничего подобного здесь нет');
    }
}

//4
let output4 = document.getElementById('output4');
let but4 = document.getElementById('but4');
but4.onclick = function() {
    let radio = document.getElementsByName("radio");
    let checkboxes = document.getElementsByName("checkbox");
    let dropdown = document.getElementsByName("dropdown")[0];
    let sradio = "";
    let scheckboxes = [];
    let sdropdown = "";
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            sradio = radio[i].value;
        }
    }
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            scheckboxes.push(checkboxes[i].value);
        }
    }
    if (dropdown.selectedIndex !== -1) {
        sdropdown = dropdown.options[dropdown.selectedIndex].value;
    }
    if (sradio === "" || scheckboxes.length === 0 || sdropdown === "") {
        output4.innerHTML = "Выберите что-то в:<br>";
        if (sradio === "") {
            output4.innerHTML += "- разделе с антоном и игорем<br>";
        }
        if (scheckboxes.length === 0) {
            output4.innerHTML += "- разделе с приколами<br>";
        }
        if (sdropdown === "") {
            output4.innerHTML += "- выпадающем списке<br>";
        }
    } else {
        output4.innerHTML = "Выбранные элементы:<br>";
        output4.innerHTML += "- среди антона и игоря победил " + sradio + "<br>";
        output4.innerHTML += "- самые прикольные приколы: " + scheckboxes.join(", ") + "<br>";
        output4.innerHTML += "- выпал: " + sdropdown + "<br>";
    }
}

//5
document.getElementById("but5").addEventListener("click", () => {
    let submit = document.getElementById("submit");
    let clickEvent = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window
    });
    submit.dispatchEvent(clickEvent);
});
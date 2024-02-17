//1
function output1() {
    let input = document.getElementById("in1");
    let output = document.getElementById("fortxt1");
    output.innerText = input.value;
}

//2
let link = document.getElementById("link2");
let output2 = document.getElementById("fortxt2");

link.addEventListener("click", (event) => {
    event.preventDefault();
});

link.addEventListener("mousedown", () => {
    output2.innerText = "на ссылке зажали курсор";
});
link.addEventListener("mouseenter", () => {
    output2.innerText = "навели курсор";
});
link.addEventListener("mouseleave", () => {
    output2.innerText = "с ссылки убрали курсор";
});
link.addEventListener("contextmenu", () => {
    output2.innerText = "нажали ПКМ";
});
link.addEventListener("mouseup", () => {
    output2.innerText = "отжали курсор";
});

//3
function changeColorToRed(obj) {
    obj.style.color = "red";
}
let changeColorToPurple = function(obj) {
    obj.style.color = "purple";
}

let objs = [];
for (let i = 0; i < 5; i++) {
    objs[i] = document.getElementById(`obj${i+1}`);
}

for (let i = 0; i < 5; i++) {
    objs[i].addEventListener("click", () => {
        changeColorToRed(objs[i]);
    })
}

for (let i = 0; i < 5; i++) {
    objs[i].addEventListener("contextmenu", () => {
        changeColorToPurple(objs[i]);
    })
}

document.getElementById("but3").addEventListener("click", () => {
    console.log("pressed")
    let obj = document.getElementById(document.getElementById("in31").value.toString());
    let event = document.getElementById("in32").value.toString();
    console.log(obj);
    console.log(event);
    if (event.toLowerCase() == "лкм") {
        changeColorToRed(obj);
    } else if (event.toLowerCase() == "пкм") {
        changeColorToPurple(obj);
    }
})
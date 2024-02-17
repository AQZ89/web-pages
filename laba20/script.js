//1
class Country {
    constructor(name, capital, population, language) {
        this.name = name;
        this.capital = capital;
        this.population = population;
        this.language = language;
    }
}


let let1 = prompt("Ведите название страны")
let let2 = prompt("Ведите столицу страны")
let let3 = prompt("Ведите население страны")
let let4 = prompt("Ведите язык страны")
let counry1 = new Country(let1, let2, +let3, let4);

document.getElementById("res11").innerHTML += counry1.name.toString();
document.getElementById("res12").innerHTML += counry1.capital.toString();
document.getElementById("res13").innerHTML += counry1.population.toString();
document.getElementById("res14").innerHTML += counry1.language.toString();

//3
let but3 = document.getElementById('but3');
but3.onclick = function() {
    document.getElementById("res3").innerHTML += JSON.stringify(counry1);
}

//5
let str = JSON.stringify(counry1);
let elemWithStr = JSON.parse(str, (param, value) => {
    if (param == "population") {
        
    } else {
        return value;
    }
});
let but5 = document.getElementById('but5');
but5.onclick = function() {
    document.getElementById("res5").innerHTML += JSON.stringify(elemWithStr);
}

//6
let JSON_Obj = `{"name":"Belarus","capital":"Minsk","population":"9999999","language":"russian"}`;
document.getElementById("res6").innerHTML += JSON_Obj;
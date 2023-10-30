//1
let obj1 = {
    father: "John",
    mother: "Maria",
    age: "22",
    car: "Bently",
    country: "Kazakhstan"
}

function Man(father, mother, age, car, country) {
    this.father = father;
    this.mother = mother;
    this.age = age;
    this.car = car;
    this.country = country;
}

let obj2 = new Man("Antony", "Daria", "25", "Wolkswagen", "Belarus");

//2
let props1 = '';
for (prop in obj1) {
    props1 += `${prop} `;
}
console.log(`Свойства в obj1: ${props1}`);

let props2 = '';
for (prop in obj2) {
    props2 += `${obj2[prop]} `;
}
console.log(`Значения в obj2: ${props2}`);

//3
obj1.hello = function() {
    console.log("hello world");
    let propsthis = '';
    for (prop in this) {
        propsthis += `${prop}: ${this[prop]}; `;
    }
    console.log(`all about obj1: ${propsthis}`);
}
obj1.hello();

//4
document.write(`<div>obj2: ${props2}</div>`)

//5
function Man0(name, age, sex, status) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.status = status;

    this.getName = function() {
        return this.name;
    }

    this.setName = function(name) {
        this.name = name;
    }
}
let nikita = new Man0("Nikita", 25, "male", "married");
console.log(nikita.getName());
nikita.setName("Anton");
console.log(nikita.getName());

//6
let anton = nikita;
console.log(anton);

//7
let obj7 = {
    value1: 2415,
    value2: 6325,
    value3: "fddsf",
    value4: true,
    value5: 352.43
}
Object.defineProperty(obj7, "value1", {
    writable: false
})
Object.defineProperty(obj7, "value2", {
    configurable: false
})
Object.defineProperty(obj7, "value3", {
    enumerable: false
})

obj7.value1 = 434;
delete obj7.value2;
//check
console.log(obj7.value1)
console.log(obj7.value2)
for (value in obj7) {
    console.log(value);
}
//1
let objjson = `{
    "ul": [
      {
        "tag": "li",
        "content": "список 1"
      },
      {
        "tag": "li",
        "content": "список 2"
      },
      {
        "tag": "li",
        "content": "список 3"
      }
    ]
  }`;

//2
let obj2 = JSON.parse(objjson);
console.log(obj2["ul"]);

//3
let nodesArray = obj2["ul"];
let ul = document.createElement("ul");

for (let i = 0; i < nodesArray.length; i++) {
    let li = document.createElement("" + nodesArray[i].tag);
    li.textContent += `${i+1}. ${nodesArray[i].content}`;
    ul.appendChild(li);
}
document.getElementById("three").appendChild(ul);

//4
let elements4 = $("body").children();
for (let i = 0; i < elements4.length; i++) {
  console.log(elements4[i]);
}

//5
let table = $('<table>');

let tableMatrix = [
  ["", "PRESENT", "PAST", "FUTURE"],
  ["+", "I dance", "I danced", "I will dance"],
  ["-", "I don\'t dance", "I didn\'t dance", "I\'ll not dance"],
  ["?", "Do I dance?", "Did I dance?", "Will I dance?"]
];

for (let i = 0; i < 4; i++) {
  let row = $('<tr>');
  for (let j = 0; j < 4; j++) {
    let cell = $('<th>').text(tableMatrix[i][j]);
    cell.css({
      "font-family": "sans-serif",
      "font-weight": "normal"
    });
    if (j == 0 || i == 0) {
      cell.css({
        "background-color": "#74c8ae"
      });
      if (i == 0 && j == 1) {
        cell.mouseenter(function() {
          document.getElementById("res5").innerHTML = "present";
        });
      }
      if (i == 0 && j == 2) {
        cell.mouseenter(function() {
            document.getElementById("res5").innerHTML = "past";
        });
      }
      if (i == 0 && j == 3) {
        cell.mouseenter(function() {
            document.getElementById("res5").innerHTML = "future";
        });
      }
    } else {
      cell.css({
        "background-color": "#60b8ce"
      });
    }
    cell.css({
      "border": "3px solid white",
      "padding": "10px",
      "color": "white"
    });
    row.append(cell);
  }
  table.append(row);
}
table.css({"border-collapse": "collapse"});
$('#five').append(table);


//8
let inp8 = [$('#form1')[0], $('#form2')[0]];

let but8 = document.getElementById("but8");
but8.onclick = function() {
  for (let i = 0; i < inp8.length; i++) {
    if (inp8[i].value === "") {
      document.getElementById("res8").innerHTML += ` не заполнено поле ${inp8[i].name}`;
    }
  }
}

//9
$(document).ready(function () {
  $('.Switch').click(function () {
    if ($(this).hasClass('On')) {
      $(this).removeClass('On').addClass('Off');
    } else {
      $(this).removeClass('Off').addClass('On');
    }
  });
});
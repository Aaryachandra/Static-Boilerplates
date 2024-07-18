function save() {
  document.getElementById("container").style.display = "none";
  document.getElementById("container1").style.display = "block";
  start();
  start1();
  start2();
}

function previous() {
  document.getElementById("container").style.display = "block";
  document.getElementById("container1").style.display = "none";
}

function start() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("exampleFormControlInput1").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("UL").appendChild(li);
  }
  document.getElementById("exampleFormControlInput1").value = "";
  li.addEventListener("click", function () {
    this.classList.toggle("strikethrough");
  });
}

function start1() {
  var div = document.createElement("div");
  var inputValue1 = document.getElementById(
    "exampleFormControlTextarea1"
  ).value;
  var t1 = document.createTextNode(inputValue1);
  div.appendChild(t1);
  if (inputValue1 === "") {
    alert("You must write something!");
  } else {
    document.getElementById("UL").appendChild(div);
  }
  document.getElementById("exampleFormControlTextarea1").value = "";
}

function start2() {
  var div1 = document.createElement("div");
  var inputValue2 = document.getElementById("exampleFormControlInput2").value;
  var t1 = document.createTextNode(inputValue2);
  div1.appendChild(t1);
  if (inputValue2 === "") {
    alert("You must write something!");
  } else {
    document.getElementById("UL").appendChild(div1);
  }
  document.getElementById("exampleFormControlInput2").value = "";
}

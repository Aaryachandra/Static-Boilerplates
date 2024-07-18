const myInput = document.getElementById("myInput");
var expression = "";

function f(num) {
  expression += num;
  document.getElementById("myInput").value = expression;
}

function final() {
  if (expression != 0) {
    document.getElementById("myInput").value = eval(expression);
    expression = "";
  } else {
    expression = "";
    document.getElementById("myInput").value = expression;
  }
}

function Clear() {
  expression = "";
  document.getElementById("myInput").value = expression;
}

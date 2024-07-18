function question() {
  document.getElementById("container1").style.display = "flex";
}

function wrong() {
  document.getElementById("reply").innerHTML = "False";
  document.getElementById("exampleRadios1").disabled = true;
  document.getElementById("exampleRadios2").disabled = true;
  document.getElementById("exampleRadios3").disabled = true;
  document.getElementById("exampleRadios4").disabled = true;
}

let i = 0;

function right() {
  document.getElementById("reply").innerHTML = "True, +1 point";
  i++;
  document.getElementById("score").innerHTML = "score:" + i;
  document.getElementById("exampleRadios1").disabled = true;
  document.getElementById("exampleRadios2").disabled = true;
  document.getElementById("exampleRadios3").disabled = true;
  document.getElementById("exampleRadios4").disabled = true;
}

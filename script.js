function getValue() {
  var value = document.getElementById("name").value;
  console.log(value);
  document.getElementById("resultado").innerHTML = "Bem vinda/e/o, " + value + "!";
}

function removeValue(){
  document.getElementById("resultado").innerHTML = "Olá!";
  document.getElementById("name").value = "";
}
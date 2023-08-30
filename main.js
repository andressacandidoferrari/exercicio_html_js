function validarFormulario() {
    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);

    if (campoB > campoA) {
      document.getElementById("mensagem").innerHTML = "Formulário válido!";
      document.getElementById("mensagem").style.color = "green";
    } else {
      document.getElementById("mensagem").innerHTML = "Formulário inválido! O número B deve ser maior que o número A.";
      document.getElementById("mensagem").style.color = "red";
    }
  }
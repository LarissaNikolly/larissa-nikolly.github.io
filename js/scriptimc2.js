// Entrada de dados:
let sexo = prompt("Informe o seu sexo (M/F): ");
let altura = parseFloat(prompt("Digite a sua altura (usar '.'): "))
// Processamento de dados:
document.write("<center><h3>Seu sexo é: " + sexo + "<br>");
document.write("Sua altura é: " + altura + "<br>");

  if (sexo == "M") {
    pesoIdealM= 72.7 * altura - 58 ;
    document.write("<center><h3>Seu peso ideal é: " + pesoIdealM.toFixed(2) + "kg <br>")
  } else if (sexo == "F") {
    pesoIdealF= 62.1 * altura - 44.7 ;
    document.write("<center><h3>Seu peso ideal é: " + pesoIdealF.toFixed(2) + "kg <br>");
  }
    
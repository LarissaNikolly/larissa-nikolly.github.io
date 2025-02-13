 //comando de entrada
 function verificarNumero(event){
    event.preventDefault();
    //Armazenamento de entrada de dados
    let numero = parseInt(document.getElementById("numero").value)
    let span = document.getElementById("span")
    
  
    //Processamento
    let numeroSorteado = Math.floor(Math.random() * 100) + 1;
  
    //Saída de dados
    span.innerHTML = "O número sorteado foi: " + numeroSorteado
    //document.write("0 nº digitado foi: " + numero + " e o que eu pensei foi: " + numeroSorteado)
  
  
  }
  
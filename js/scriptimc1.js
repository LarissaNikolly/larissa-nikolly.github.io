
function classificarPeso() {
    // Obtém o valor inserido
    let peso = parseFloat(document.getElementById("peso").value);
  
    // Verifica se o peso é válido
    if (isNaN(peso) || peso <= 0) {
      alert("Por favor, insira um peso válido.");
      return;
    }
  
    // Classificação do peso
    let resultado = "";
  
    if (peso < 50) {
      resultado = "Você está classificado como 'magra'.";
    } else if (peso >= 50 && peso <= 70) {
      resultado = "Você está dentro da faixa de peso 'normal'.";
    } else {
      resultado = "Você está acima da faixa de peso normal.";
    }
  
    // Exibe o resultado
    document.getElementById("resultado").textContent = resultado;
  }
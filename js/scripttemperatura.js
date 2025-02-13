//comando de entrada
let temperatuea = parseFloat(prompt("Digite a temperatura em celsuis:"));

//comando de processamento
let fahrenheit = (temperatuea * 1.8) + 32;

//comando de saída
document.write("<h2>Conversor de Temperatura</h2><br>")
document.write("<h3>A temperatura em Celsius é:" + temperatuea + "<br>")
document.write("A temperatura em Fahrenheit é:" + fahrenheit)
 
function totalPrice() {
  const PrecoG = document.getElementById("gasolina").value;
  const PrecoA = document.getElementById("alcool").value;
  const pResul = document.getElementById("resultadoPorcent");
  const totalR = document.getElementById("resultado");
  const Porcents = (PrecoA / PrecoG) * 100;

  pResul.innerHTML = `O preço do Álcool representa ${Porcents.toFixed(
    2
  )}% do valor da Gasolina.`;

  if (Porcents < 30) {
    totalR.innerHTML = "Opte por por abastecer com Álcool";
  } else {
    totalR.innerHTML = "Opte por abastecer com Gasolina";
  }
}

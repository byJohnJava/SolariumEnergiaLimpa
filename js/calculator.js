function calculoPainel() {
  var consumo = parseFloat(document.getElementById("consumo").value);
  var hsp = parseFloat(document.getElementById("hsp").value);
  var valorpotencia = document.getElementById("valorpotencia");
  var quantPlacas = document.getElementById("quantPlacas");
  var custoMensal = document.getElementById("custoMensal").value;
  if (custoMensal != "") {
    custoMensal = parseFloat(custoMensal);
  }
  var paragrafoEconomia = document.getElementById("economia");
  var Pmedio = 0;
  var economia = 0;
  potencia = ((consumo / 30) / hsp) / 0.8;
  painel = Math.ceil((potencia * 1000) / 340);
  area = painel * 2 * 1
  inversor = ((painel * 1 * 340) / 1000).toFixed(2);
  if (inversor <= 2.03) {
    Pmedio = "R$ 15.818,78"
  } else if (inversor > 2.03 && inversor <= 2.43) {
    Pmedio = "16.800,00"
  } else if (inversor > 2.44 && inversor <= 3.65) {
    Pmedio = "22.380,00"
  } else if (inversor > 3.66 && inversor <= 4.46) {
    Pmedio = "26.130,00"
  } else if (inversor > 4.47 && inversor <= 4.86) {
    Pmedio = "27.750,00"
  } else if (inversor > 4.87 && inversor <= 5.27) {
    Pmedio = "29.580,00"
  } else if (inversor > 5.28 && inversor <= 6.48) {
    Pmedio = "34.230,00"
  } else if (inversor > 6.49 && inversor <= 6.89) {
    Pmedio = "35.870,00"
  } else if (inversor > 6.90 && inversor <= 7.70) {
    Pmedio = "39.930,00"
  } else if (inversor > 7.71 && inversor <= 8.91) {
    Pmedio = "44.140,00"
  } else if (inversor > 8.92 && inversor <= 9.72) {
    Pmedio = "47.150,00"
  } else if (inversor > 9.73 && inversor <= 11.34) {
    Pmedio = "51.440,00"
  } else if (inversor > 11.35 && inversor <= 12.56) {
    Pmedio = "57.310,00"
  } else if (inversor > 12.57 && inversor <= 14.58) {
    Pmedio = "67.100,00"
  } else if (inversor > 14.59 && inversor <= 21.06) {
    Pmedio = "92.100,00"
  }
  Pmediob = Pmedio.replace('.', '');
  economia = (custoMensal * 0.95).toFixed(2);
  payback = (parseFloat(Pmediob) / (0.95 * custoMensal * 12)).toFixed(2);
  quantPlacas.innerHTML = `<br> 
  <form> 
    <legend>Resultado de Dimensionamento e investimento</legend> 
    <p>Quantidade necess??ria de pain??is fotovolt??icos: <b> ${painel} </b> 
    * (Considerado painel de 340W de 72 c??lulas, cada um com comprimento de 2 m, largura de 1 m e peso de 22 Kg).
    </p>
    <p>Pot??ncia necess??ria do Inversor: <b> ${inversor}Kw.</b></p>
    <p>Pre??os m??dios totais da instala????o de placa solar e equipamentos ?? de: <b>R$</b> <b> ${Pmedio} </b></p>
    <p>A ??rea necess??ria estimada para instala????o dos pain??is fotovolt??icos ?? de: <b> ${area}m??</b></p>
    
  </form>`;

  if (custoMensal != "") {
    paragrafoEconomia.innerHTML = `
    <p>Com uma economia m??dia mensal de R$ ${economia} , O payback do investimento ?? de : <b> ${payback} </b> anos</p>`
  }

  var form = document.getElementById('formCalculo');
  form.addEventListener('submit', function(e){
      e.preventDefault();
  });
  
}

function limparCampos(){
  var inputConsumo = document.getElementById("consumo");
  var inputHsp = document.getElementById("hsp");
  var inputCustoMensal = document.getElementById("custoMensal");
  var quantPlacas = document.getElementById("quantPlacas");
  var paragrafoEconomia = document.getElementById("economia");
  inputConsumo.value = "";
  inputHsp.value = "";
  inputCustoMensal.value = "";
  quantPlacas.innerHTML = "";
  paragrafoEconomia.innerHTML = "";
}

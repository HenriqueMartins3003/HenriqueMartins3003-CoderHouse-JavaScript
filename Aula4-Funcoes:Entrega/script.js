const calculaICMS = (valor) => {
  valorICMS = parseFloat(valor) * 0.18;
  valorFinal = parseFloat(valor) + parseFloat(valorICMS);
  console.log(valor);
  return valorFinal;
};

const criaElemento = (valor) => {
  const mostraValor = document.getElementById("mostraValor");
  mostraValor.textContent = `Valor com ICMS: R$ ${valor}`;
};

const onSubmit = (e) => {
  e.preventDefault();
  const valorProd = document.getElementById("valor-prod").value;
  const valorCalculado = calculaICMS(valorProd);
  criaElemento(valorCalculado);
};

function calcularIMCForm() {
  // Obter dados do formulário
  var nome = document.getElementById('calcularIMCForm').elements['nome'].value;
  var peso = parseFloat(
    document.getElementById('calcularIMCForm').elements['peso'].value
  );
  var altura = parseFloat(
    document.getElementById('calcularIMCForm').elements['altura'].value
  );

  // Validar entrada
  if (isNaN(peso) || isNaN(altura)) {
    alert('Por favor, insira valores válidos para peso e altura.');
    return;
  }

  // Converter altura para metros
  altura = altura / 100;

  // Calcular IMC
  var imc = peso / (altura * altura);

  // Exibir resultado em HTML
  var resultadoHTML = `<h2> ${nome}, seu IMC é: ${imc.toFixed(2)}</h2>`;

  // Atualizar o conteúdo do div
  document.getElementById('resultado_imc').innerHTML = resultadoHTML;

  // Mostra Imagem

  let resultImage = document.getElementById('imc-image-result');

  var image01 = './assets/images/Usuario/slim.png';
  var image02 = './assets/images/Usuario/back (1).png';
  var image03 = './assets/images/Usuario/human-body.png';
  var image04 = './assets/images/Usuario/obesity (3).png';
  var image05 = './assets/images/Usuario/obesity (2).png';

  var imageBodyUser = document.getElementById('card-image-id');

  let resultadoValor = document.getElementById('resultado-imc-valor');
  let resultadoProgresso = document.getElementById('resultado-imc-progresso');
  let demonstrate = document.getElementById('demonstrate');

  if (demonstrate.style.display === 'none' && imc < 16) {
    demonstrate.style.display = 'block';
    resultImage.src = image01;
    resultadoValor.innerText = 'Muito Abaixo do Peso';
    resultadoValor.style.color = 'red';
    resultadoProgresso.style.width = '10%';
    resultadoProgresso.style.background = 'red';
  } else if (demonstrate.style.display === 'none' && imc >= 16 && imc < 18.5) {
    demonstrate.style.display = 'block';
    resultImage.src = image02;
    resultadoValor.innerText = 'Abaixo do Peso';
    resultadoValor.style.color = 'rgb(224, 240, 8)';
    resultadoProgresso.style.width = '30%';
    resultadoProgresso.style.background = 'rgb(224, 240, 8)';
  } else if (demonstrate.style.display === 'none' && imc >= 18.5 && imc < 25) {
    demonstrate.style.display = 'block';
    resultImage.src = image03;
    resultadoValor.innerText = 'Peso Normal';
    resultadoValor.style.color = 'green';
    resultadoProgresso.style.width = '50%';
    resultadoProgresso.style.background = 'green';
  } else if (demonstrate.style.display === 'none' && imc >= 25 && imc < 30) {
    demonstrate.style.display = 'block';
    resultImage.src = image04;
    resultadoValor.innerText = 'Sobrepeso';
    resultadoValor.style.color = 'rgb(224, 240, 8)';
    resultadoProgresso.style.width = '70%';
    resultadoProgresso.style.background = 'rgb(224, 240, 8)';
  } else if (demonstrate.style.display === 'none' && imc >= 30 && imc < 35) {
    demonstrate.style.display = 'block';
    resultImage.src = image04;
    resultadoValor.innerText = 'Obesidade Grau I';
    resultadoValor.style.color = 'orange';
    resultadoProgresso.style.width = '80%';
    resultadoProgresso.style.background = 'orange';
  } else if (demonstrate.style.display === 'none' && imc >= 35 && imc < 40) {
    demonstrate.style.display = 'block';
    resultImage.src = image05;
    resultadoValor.innerText = 'Obesidade Grau II';
    resultadoValor.style.color = 'red';
    resultadoProgresso.style.width = '90%';
    resultadoProgresso.style.background = 'red';
  } else if (demonstrate.style.display === 'none' && imc > 40) {
    demonstrate.style.display = 'block';
    resultImage.src = image05;
    resultadoValor.innerText = 'Obesidade Grau III';
    resultadoValor.style.color = 'red';
    resultadoProgresso.style.width = '100%';
    resultadoProgresso.style.background = 'red';
  } else {
    demonstrate.style.display = 'none';
  }
}

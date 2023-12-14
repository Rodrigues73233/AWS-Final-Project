function obterParametrosDaURL() {
  var url = new URL(window.location.href);
  var usuarioParametro = url.searchParams.get('usuario');
  return JSON.parse(decodeURIComponent(usuarioParametro));
}

// Função para exibir os dados do usuário na segunda página
function exibirDadosUsuarioNaSegundaPagina() {
  var usuario = obterParametrosDaURL();

  // Atualize o DOM com os dados do usuário
  document.getElementById('title').innerText = usuario.nome;
  document.getElementById('userName').innerText = usuario.nome;
  document.getElementById('userNameGeneral').innerText = usuario.nome;
  document.getElementById('idade').innerText = usuario.idade;
  document.getElementById('altura').innerText = usuario.altura;
  document.getElementById('peso').innerText = usuario.peso;

  var imc = calcularIMC(usuario.peso, usuario.altura);
  var resultadoimc = getClassificacaoIMC(imc);
  document.getElementById('desc').innerText = 'Você está em ' + resultadoimc;

  console.log('Dados verificados corretamente');
}

// Image Config
var image01 = './assets/images/Colaboradores/Enzio.png';
var image02 = './assets/images/Colaboradores/Gabriel.png';

var imageBody01 = './assets/images/Usuario/human-body.png';
var imageBody02 = './assets/images/Usuario/obesity (3).png';

let showImage = document.getElementById('profile-image');
let showBodyImage = document.getElementById('card-image-id');
// ------------

function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function getClassificacaoIMC(imc) {
  if (imc < 16) {
    return 'Muito abaixo do peso';
  } else if (imc >= 16 && imc < 18.5) {
    return 'Abaixo do peso';
  } else if (imc >= 18.5 && imc < 25) {
    return (
      ((showImage.src = image01), (showBodyImage.src = imageBody01)),
      'Peso normal'
    );
  } else if (imc >= 25 && imc < 30) {
    return (
      ((showImage.src = image02), (showBodyImage.src = imageBody02)),
      'Sobrepeso'
    );
  } else if (imc >= 30 && imc < 35) {
    return 'Obesidade Grau I';
  } else if (imc >= 35 && imc < 40) {
    return 'Obesidade Grau II';
  } else {
    return 'Obesidade Grau III';
  }
}

// Chame a função para exibir dados quando a página carregar
window.onload = function () {
  exibirDadosUsuarioNaSegundaPagina();
};

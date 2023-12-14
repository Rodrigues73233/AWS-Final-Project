function exibirDadosUsuario(usuario) {
  document.getElementById('title').innerText = usuario.nome;
  document.getElementById('desc').innerText = `Você está em ${usuario.estado}`;
  document.getElementById('idade').innerText = usuario.idade;
  document.getElementById('altura').innerText = usuario.altura;
  document.getElementById('peso').innerText = usuario.peso;
}
function enviarDados() {
  event.preventDefault();
  var formulario = document.getElementById('meuFormulario');
  var dados = new FormData(formulario);

  var usuario = dados.get('usuario');
  var senha = dados.get('senha');

  console.log(usuario);
  console.log(senha);

  // Converta os dados para um objeto JSON
  var jsonData = { usuario: usuario, senha: senha };

  fetch('http://3.220.115.90:3000/validar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonData)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log('Resposta do backend:', data);
      if (data.status === 'OK') {
        console.log('usuário logado com sucesso');
        window.location.href = `usuario.html?usuario=${encodeURIComponent(
          JSON.stringify(data.user)
        )}`;
      } else {
        console.log('usuário não cadastrado');
      }
    })
    .catch(error => console.error('Erro:', error));
}

// Alterações Gabriel

// Botão de Login funcionando ao apertar a tecla ENTER
document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    const btn = document.querySelector('#send');

    btn.click();

    console.log('Apertou a tecla ENTER');
  }
});

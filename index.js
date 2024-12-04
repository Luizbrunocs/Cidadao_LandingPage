const form = document.querySelector('#formulario-chamado');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

// Impede o envio do formulário e exibe a mensagem de sucesso
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Exibe a mensagem de sucesso
  mensagemSucesso.style.display = 'block';

  // Limpa os campos do formulário
  form.reset();

  // Oculta a mensagem de sucesso após 3 segundos
  setTimeout(() => {
    mensagemSucesso.style.display = 'none';
  }, 3000); // 3000 ms = 3 segundos
});

// Verifica se o usuário está logado
if (localStorage.getItem("token") === null) {
  alert("Você precisa estar logado para acessar essa página");
  window.location.href = "login.html";
}

const userLogado = JSON.parse(localStorage.getItem("userLogado"));

if (userLogado) {
  const logado = document.querySelector("#logado");
  logado.innerHTML = `Olá! <br> Seja Bem-vindo ao <br> Cidadão Atento!`;
}

// Função para capturar a geolocalização
function obterGeolocalizacao() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      // Preenche o campo de geolocalização com a latitude e longitude
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      document.getElementById('geolocalizacao').value = `Latitude: ${latitude}, Longitude: ${longitude}`;
    }, function (error) {
      alert("Erro ao obter geolocalização.");
    });
  } else {
    alert("Geolocalização não é suportada pelo seu navegador.");
  }
}

// Chama a função para obter a geolocalização assim que a página carregar
window.onload = obterGeolocalizacao;

// Função para redirecionar para a página home
function sair() {
  if (confirm("Tem certeza que deseja sair?")) {
    window.location.href = 'home.html';
  }
}

// Associa a função sair ao clique do botão "Sair"
document.getElementById('btnSair').addEventListener('click', sair);

const form = document.querySelector('#cadastro form');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Exibe a mensagem de sucesso
    mensagemSucesso.style.display = 'block';

    // Limpa os campos do formulário
    form.reset();

    // Após 3 segundos, redireciona para a página de login
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000); // 2000 ms = 2 segundos
});

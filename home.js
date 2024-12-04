const form = document.querySelector('#cadastro form');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    // código para enviar os dados para o servidor

    // Simulando o envio com sucesso (substitua por sua lógica real)
    mensagemSucesso.style.display = 'block';

    // Limpar os campos do formulário (opcional)
    form.reset();
});

setTimeout(() => {
    mensagemSucesso.style.display = 'none';
}, 3000); // Ocultar a mensagem após 3 segundos


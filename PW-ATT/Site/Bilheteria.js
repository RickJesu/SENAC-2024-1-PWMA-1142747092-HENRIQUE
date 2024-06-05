let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let game = document.getElementById('game').value;
    let sector = document.getElementById('sector').value;
    let quantity = document.getElementById('quantity').value;
    let email = document.getElementById('email').value;
    let plan = document.getElementById('plan').value;
    let discount = 0;
    let pricePerTicket = 0;

    switch (sector) {
        case 'arquibancada_sul':
        case 'arquibancada_leste':
        case 'arquibancada_oeste':
        case 'arquibancada_norte':
            pricePerTicket = 50;
            break;
        case 'cadeira_leste':
        case 'cadeira_oeste':
        case 'cadeira_norte':
        case 'cadeira_sul':
            pricePerTicket = 100;
            break;
        case 'camarote':
            pricePerTicket = 200;
            break;
        default:
            alert("Por favor, selecione um setor válido.");
            return;
    }

    if (quantity < 1) {
        alert("Por favor, selecione a quantidade de ingressos.");
        return;
    }

    if (email === 'morumbi841@gmail.com') {
        if (sector.startsWith('arquibancada') || sector.startsWith('cadeira')) {
            switch (plan) {
                case 'vermelho':
                    discount = 0.50;
                    break;
                case 'branco':
                case 'preto':
                    discount = 0.70;
                    break;
                case 'tricolor':
                    discount = 0.80;
                    break;
                case 'diamante':
                    discount = 0.90;
                    break;
                default:
                    alert("Por favor, selecione um plano de sócio torcedor válido.");
                    return;
            }
            let total = pricePerTicket * quantity * (1 - discount);
            alert(`Você recebeu um desconto de ${(discount * 100)}% como sócio torcedor do plano ${plan}! Total a pagar: R$${total.toFixed(2)} Redirecionando Para a página de pagamento`);
            // Redirecionar para a página de pagamento
            window.location.href = "revisão.html";
        } else {
            alert("Descontos são aplicáveis apenas para Arquibancada e Cadeira.");
        }
    } else {
        let total = pricePerTicket * quantity;
        alert(`Ingresso(s) comprado(s) com sucesso! Total a pagar: R$${total.toFixed(2)} Redirecionando Para a página de pagamento`);
        // Redirecionar para a página de pagamento
        window.location.href = "revisão.html";
    }

    // Save form data to local storage
    localStorage.setItem('game', game);
    localStorage.setItem('sector', sector);
    localStorage.setItem('quantity', quantity);
    localStorage.setItem('email', email);
    localStorage.setItem('plan', plan);
});
// Load form data from local storage
window.addEventListener('load', function() {
    if (localStorage.getItem('game')) {
        document.getElementById('game').value = localStorage.getItem('game');
    }
    if (localStorage.getItem('sector')) {
        document.getElementById('sector').value = localStorage.getItem('sector');
    }
    if (localStorage.getItem('quantity')) {
        document.getElementById('quantity').value = localStorage.getItem('quantity');
    }
    if (localStorage.getItem('email')) {
        document.getElementById('email').value = localStorage.getItem('email');
    }
    if (localStorage.getItem('plan')) {
        document.getElementById('plan').value = localStorage.getItem('plan');
    }
});

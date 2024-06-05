document.addEventListener('DOMContentLoaded', function() {
    const orderNumber = 'SPFC' + Math.floor(Math.random() * 1000000);  // Simulando um número de pedido
    const customerName = localStorage.getItem('customerName') || 'Cliente';
    const gameDateTime = '25/06/2024 às 19:00';  // Exemplo de data e horário do jogo
    const qrCodeText = orderNumber + '|' + customerName + '|' + gameDateTime;

    // Exibir número do pedido, nome do cliente e data/hora do jogo
    document.getElementById('orderNumber').textContent = orderNumber;
    document.getElementById('customerName').textContent = customerName;
    document.getElementById('gameDateTime').textContent = gameDateTime;

    // Gerar QR code usando uma API gratuita de geração de QR code
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrCodeText)}`;
    document.getElementById('qrCode').src = qrCodeUrl;
});
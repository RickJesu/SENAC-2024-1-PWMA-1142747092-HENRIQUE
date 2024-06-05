document.addEventListener("DOMContentLoaded", function() {
  const paymentForm = document.getElementById("paymentForm");
  const cardDetails = document.getElementById("cardDetails");
  const qrCode = document.getElementById("qrCode");
  const cardNumberInput = document.getElementById("cardNumber");
  const cardType = document.getElementById("cardType");

  paymentForm.addEventListener("change", function() {
    const paymentType = document.querySelector('input[name="paymentType"]:checked').value;
    
    if (paymentType === "pix") {
      cardDetails.style.display = "none";
      qrCode.style.display = "block";
    } else {
      cardDetails.style.display = "block";
      qrCode.style.display = "none";
    }
  });

  cardNumberInput.addEventListener("input", function() {
    const cardNumber = cardNumberInput.value;

    if (/^4/.test(cardNumber)) {
      cardType.textContent = "VISA";
    } else if (/^5/.test(cardNumber)) {
      cardType.textContent = "Mastercard";
    } else {
      cardType.textContent = "";
    }
  });
});

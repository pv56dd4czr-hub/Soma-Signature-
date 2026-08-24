const buttons = document.querySelectorAll(".product button");

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    const product = button.parentElement.querySelector("h3").textContent;

    const message = `Hello SOMA SIGNATURE ❤️ I am interested in ${product}. Please send me more details.`;

    const whatsappLink =
      "https://wa.me/2348037708522?text=" + encodeURIComponent(message);

    window.open(whatsappLink, "_blank");
  });
});

const buttons = document.querySelectorAll(".product button");

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    alert("Welcome to SOMA SIGNATURE! 💕 Please contact us to place your order.");
  });
});

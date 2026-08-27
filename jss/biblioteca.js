let formulario = document.getElementById("form");
let mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    mensagem.innerHTML = "Empréstimo registrado com sucesso! 📚";

});

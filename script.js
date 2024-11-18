document.addEventListener("DOMContentLoaded", () => {
  const video1 = document.getElementById("video1");
  const video2 = document.getElementById("video2");
  const pauseButton = document.getElementById("pauseButton");

  // Mostra o botão de pause ao final do primeiro vídeo
  video1.addEventListener("ended", () => {
    pauseButton.classList.remove("hidden");
    pauseButton.classList.add("show");
  });

  // Ao clicar no botão de pause, inicia o segundo vídeo
  pauseButton.addEventListener("click", () => {
    pauseButton.classList.remove("show");
    pauseButton.classList.add("hidden");

    // Inicia o segundo vídeo
    video1.classList.add("hidden");
    video2.classList.remove("hidden");
    video2.play();
  });

  // Ao finalizar o segundo vídeo, faz o fade-out e redireciona
  video2.addEventListener("ended", () => {
    video2.classList.add("hidden"); // Desaparecimento gradual do segundo vídeo
    setTimeout(() => {
      window.location.href = "portfolio.html"; // Redireciona para a página do portfólio
    }, 700); // Espera 3 segundos para completar o fade-out antes do redirecionamento
  });
});

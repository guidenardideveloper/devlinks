function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const image = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    image.setAttribute("src", "./assets/images/avatar-light.png");
    image.setAttribute("alt", "Foto de Guilherme usando óculos de sol e moletom preto, com o céu azul de fundo.");
  } else {
    image.setAttribute("src", "./assets/images/avatar.png");
    image.setAttribute("alt", "Foto do Guilherme de óculos de sol, sorrindo e com um efeito preto e branco na imagem.");
  }
}

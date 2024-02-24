function footerComp(container) {
  const footerEl = document.createElement('div')
  footerEl.innerHTML = `<footer class="footer">
    <figure>
      <img
        class="footer__logo"
        src="./images/logo.png"
        alt="Logo Axel Rojas"
      />
    </figure>
    <div class="footer__container_sections">
      <a class="footer_home" href="./">Home</a>
      <a class="footer_servicios" href="./servicios.html">Servicios</a>
      <a class="footer_contacto" href="./contacto.html">Contacto</a>
    </div>
    <div class="footer__container-iconos">
      <a href="https://www.linkedin.com/in/axelkevinagustinrojas/">
        <img
          class="footer__redes"
          src="./images/linkedin.svg"
          alt="logo de linkedin"
        />
      </a>
      <a href="https://github.com/AxelRojas-hub">
        <img
          class="footer__redes"
          src="./images/github.svg"
          alt="logo de github"
        />
      </a>
      <a href="https://twitter.com/">
        <img
          class="footer__redes"
          src="./images/twitter.svg"
          alt="Logo de twitter"
        />
      </a>
    </div>
    <p class="footer__texto-marca">©2024 - https://apx.school</p>
  </footer>`;
  container.appendChild(footerEl)
}
function headerComponent(container) {
  const componentEl = document.createElement("div")
  componentEl.innerHTML = `<header class="header">
    <section class="overlay-menu">
      <img
        src="./images/cruz.svg"
        class="overlay-menu__cruz"
        alt="icono salir del menu"
      />
      <div class="overlay-menu__opciones">
        <a href="./portfolio.html">
          <h2 class="overlay-menu__title">Portfolio</h2>
        </a>
        <a href="./servicios.html">
          <h2 class="overlay-menu__title">Servicios</h2>
        </a>
        <a href="./contacto.html">
          <h2 class="overlay-menu__title">Contacto</h2>
        </a>
      </div>
    </section>
    <a href="./">
    <img
      class="header__logo"
      src="./images/logo.png"
      alt="Logo Axel Rojas"
    />
  </a>
    <nav class="header__nav">
      <ul class="header__lista">
        <li class="header__lista-item">
          <a href="./portfolio.html">Portfolio</a>
        </li>
        <li>
          <a href="./servicios.html">Servicios</a>
        </li>
        <li>
          <a href="./contacto.html">Contacto</a>
        </li>
      </ul>
    </nav>
    <img
      src="./images/hamburger.svg"
      alt="icono para abrir el menu"
      class="header__hamburguesa"
    />
  </header>`;

  const hamburger = componentEl.querySelector('.header__hamburguesa')

  hamburger.addEventListener('click', (e) => {
    e.preventDefault()
    const menu = document.querySelector('.overlay-menu')
    menu.style.display = 'flex'
  })

  const cierraMenu = componentEl.querySelector('.overlay-menu__cruz')
  cierraMenu.addEventListener('click', (e) => {
    e.preventDefault()
    const menu = document.querySelector('.overlay-menu')
    menu.style.display = 'none'
  })


  container.appendChild(componentEl)
}
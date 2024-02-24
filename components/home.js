function homeComponent(container) {
    const homeEl = document.createElement("div")
    homeEl.innerHTML = `<div class="home__content">
    <h1 class="home__title"></h1>
    <img
      class="home__img"
      src=""
      alt=""
    />
  </div>`;
    container.appendChild(homeEl)
}
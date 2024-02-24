function cardComponent(container) {
  const cardEl = document.createElement('div')
  cardEl.innerHTML = `    <section class="servicios">
  <h2 class="servicios__title"></h2>
    <div class="servicios__content">
      <div class="proyectos-container">  
      
      </div>
      <template id="proyecto-template">
        <a class="proyecto-url" target= "blank" href="">
          <div class="proyecto">
          <img
          class="proyecto__img"
          src=""
          alt=""
          />
          <div class="proyecto__descripcion">
          <h4 class="proyecto__title"></h4>
          <p class="proyecto__text">
          </p>
          </div>
          </div>
        </a>
      </template>
    </div>
  </section>`
  container.appendChild(cardEl)
}
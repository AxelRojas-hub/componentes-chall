function formComp(container) {
  const formEl = document.createElement("div")
  formEl.innerHTML = `    <section class="contacto">
    <div class="contacto__content">
      <h2 class="contacto__title">Escribime</h2>
      <form class="contacto__form">
        <div class="form__datos">
          <label class="form__label" for="nombre">Nombre</label>
          <input
            class="form__input"
            type="text"
            name="nombre"
            placeholder="Tu nombre"
          />
        </div>
        <div class="form__datos">
          <label class="form__label" for="email">Email</label>
          <input
            class="form__input"
            type="email"
            name="email"
            placeholder="tu@mail.com"
          />
        </div>
        <div class="form__textarea">
          <label class="form__label" for="mensaje">Mensaje</label>
          <textarea class="form__input" name="mensaje"></textarea>
          <button class="contacto__form--button">Enviar</button>
        </div>
      </form>
    </div>
  </section>`;

  const formulario = formEl.querySelector('.contacto__form')

  formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    const form = new FormData(formulario)
    console.log([...form])
    fetch("http://httpbin.org/post", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: {
        "to": "asd123@gmail.com",
        "message": form[2]
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
  })


  container.appendChild(formEl)
}
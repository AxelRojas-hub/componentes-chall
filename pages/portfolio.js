function addProjectCard(params = {}) {
    const template = document.querySelector('#proyecto-template')
    const container = document.querySelector('.proyectos-container')

    template.content.querySelector(".proyecto__title").textContent = params.title
    template.content.querySelector(".proyecto__text").textContent = params.description
    template.content.querySelector(".proyecto__img").src = params.image
    if (params.url) {
        template.content.querySelector(".proyecto-url").href = params.url
    } else {
        const url = template.content.querySelector(".proyecto-url")
        url.removeAttribute("href")
    }

    const clone = document.importNode(template.content, true)
    container.appendChild(clone)
}

function getCards(contentType) {
    return fetch('https://cdn.contentful.com/spaces/adr0htd12axw/environments/master/entries?access_token=w3XdfDdwgk31UJNbLJ2yH8uLiH-JS3h9pyaKdocsPMg')
        .then(response => response.json())
        .then(data => {
            const fieldCollFiltrada = data.items.filter((e) => {
                return e.sys.contentType.sys.id.toLowerCase() === contentType
            })
            const paramsObj = fieldCollFiltrada.map((item) => {
                const idImagenItem = item.fields.imagen.sys.id
                const imagenEncontrada = data.includes.Asset.find((e) => {
                    return e.sys.id === idImagenItem
                })
                return {
                    title: item.fields.titulo,
                    description: item.fields.descripcion,
                    image: imagenEncontrada.fields.file.url,
                    url: item.fields.url
                }
            })
            return paramsObj
        });
}


function main() {
    const homeEl = document.querySelector('.home')
    headerComponent(homeEl)
    homeComponent(homeEl)
    document.querySelector(".home__title").innerHTML = "Mis <span>trabajos</span>"
    document.querySelector(".home__img").src = "./images/trabajos.png"
    cardComponent(document.querySelector('.trabajos'))
    footerComp(document.querySelector('.footer-cont'))

    getCards("work").then((data) => {
        for (const element of data) {
            addProjectCard(element)
        }
    })

}
main()


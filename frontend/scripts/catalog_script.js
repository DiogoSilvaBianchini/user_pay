const getAllProducts = async () => {
    const req = await fetch("http://localhost:8082/product/").then(res => res.json())
    return req.products
}

const createCard = async () => {
    try {
        const products = await getAllProducts()
        products.map((product) => {
            const cardTemplate = `
                <div class="card">
                    <img src="../public/imgs/${product.img[0]}" alt="Dracula capa dura"/>
                    <div class="price">
                        <h2>${product.name}</h2>
                        <span class="price-card">R$ ${product.price}</span>
                        <div class="row">
                            <span class="material-symbols-outlined">
                                credit_card
                            </span>
                            <span class="price-card small"> 12x R$ ${(product.price / 12).toFixed(2)}</span>
                        </div>
                    </div>
                    <button class="buy-button">
                        <span class="material-symbols-outlined">
                            shopping_cart
                        </span> 
                        Comprar 
                    </button>
                </div>
                
            `
    
            
            document.querySelector("#content").innerHTML += cardTemplate
        })
    } catch (error) {
        let cardErrorSignal = `
            <div class="disconect">
                <span class="material-symbols-outlined">
                    wifi_off
                </span>
                <h2>Sinal perdido</h2>
            </div>
        `
        
        document.querySelector("#content").innerHTML = cardErrorSignal
    }    
}


const buildCard = async () => {
    let products = await getAllProducts()
    console.log(products)
    let container = document.querySelector("#cardColumnContainer")

    container.innerHTML += `
            <div class="left">
                <div class="single-card">
                    <h3>Livors</h3>
                    <div class="content-card">
                        <img src="../public/imgs/${products[0].img[0]}" alt="">
                        <div class="column-justify">
                            <h2>${products[0].name}</h2>
                            <p>${products[0].describe}</p>
                            <span class="simple-text">Copias vendidas: 200 cópias</span>
                            <button class="buy-button">
                                Visite o produto
                                <span class="material-symbols-outlined">
                                    chevron_right
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `

        container.innerHTML += `
            <div class="right">
                <div class="single-card">
                    <h3>Livors</h3>
                    <div class="content-card">
                        <img src="../public/imgs/${products[2].img[0]}" alt="">
                        <div class="column-justify">
                            <h2>${products[2].name}</h2>
                            <p>${products[2].describe}</p>
                            <span class="simple-text">Copias vendidas: 200 cópias</span>
                            <button class="buy-button">
                                Visite o produto
                                <span class="material-symbols-outlined">
                                    chevron_right
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `
}


window.addEventListener("load", buildCard())
createCard()
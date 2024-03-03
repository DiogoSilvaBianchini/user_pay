document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()
})

const registerNewProduct = async () => {
    let title = document.getElementById("title")
    let price = document.getElementById("price")
    let fileInput = document.getElementById("fileInput").files
    let describ = document.getElementById("describ")
    let category = document.getElementById("category")

    const body = new FormData()
    body.set("name", title.value)
    body.set("price", price.value)    
    body.set("describe", describ.value)
    body.set("category", category.value)

    if(fileInput.length == 1){
        body.set("img", fileInput[0])

        await fetch("http://localhost:8082/product/65d29349c3ff2ec4845a7b1d", {
            method: "POST",
            body: body
        }).then(res => res.json()).then(json => console.log(json)).catch(err => console.log(err))
    }else{
        body.set("img", fileInput[0])
        body.set("img2", fileInput[1])

        await fetch("http://localhost:8082/product/doubleImage/65d29349c3ff2ec4845a7b1d", {
            method: "POST",
            body: body
        }).then(res => res.json()).then(json => console.log(json)).catch(err => console.log(err))
    }

}
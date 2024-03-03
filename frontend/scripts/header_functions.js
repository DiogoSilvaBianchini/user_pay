let box = document.querySelector("#box")
let boxCard = document.querySelector("#boxHeader")

box.addEventListener("mouseenter", (e) => {
    document.querySelector("#boxHeader").classList.remove("block")
})

boxCard.addEventListener("mouseleave", (e) => {
    boxCard.classList.add("block")
})

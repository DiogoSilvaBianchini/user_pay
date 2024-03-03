document.querySelector("#price").addEventListener("keyup", (e) => {
    if(e.target.value.includes(",")){
        let newString = e.target.value.replace(/,/, ".")
        e.target.value = newString
        console.log(newString)
    }
})
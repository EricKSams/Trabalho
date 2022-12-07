function verificaValores() {
const nome = document.getElementById("nome")
const surname = document.getElementById("surname")
const email = document.getElementById("email")
const phone = document.getElementById("telefone")
const bairro = document.getElementById("bairro")
const btn = document.getElementById("btn")

btn.addEventListener("click", ()=>{
    if(nome.value.length < 3) {
        alert("Nome Inválido")
    }else {
        return
    }
})

}


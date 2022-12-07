window.alert("Bem Vindo")

function logar(){
    var login = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if (login == "admin" && senha == "admin") {
        alert("sucesso");
        location.href = "C:\Users\Erick\OneDrive\Documentos\Codes\Web\SACSNot.html";
    }else{
        alert("Erro, tente novamente");
    }
};

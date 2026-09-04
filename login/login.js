//console.log("Hello World!!")

//alert("Hello World!!")

// var nome = "Lucas" !Não vamos usar o var
//let nome = "Lucas"
//const nome = "Lucas"


const campoSenha = document.getElementById("senha");
const btnSenha = document.querySelector("#mostrar-senha");



btnSenha.addEventListener("click", function() {
    
    //if(campoSenha.type == "password") {
    //    campoSenha.type ="text";
    //}

    //else {
    //    campoSenha.type = "password";
    //}

    campoSenha.type = campoSenha.type == "password" ? "text" : "password"

    
})
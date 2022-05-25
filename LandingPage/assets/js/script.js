var nome = document.querySelector("#nome")
var email = document.querySelector("#email")
var assunto = document.querySelector("#assunto")
var mapa = document.querySelector("#mapa")
var nomeOk = false
var emailOk = false
var assuntoOk = false

function validarNome(){
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 2){
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = 'gray'
        nomeOk = false
        txtNome.style.display = 'block'
    }else{
        txtNome.style.display = 'none'
        nomeOk = true
    }
}

function validarEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = "Email inválido"
        txtEmail.style.color = 'gray'
        emailOk = false
        txtEmail.style.display = 'block'
    }else{
        txtEmail.style.display = 'none'
        emailOk = true
    }
}

function validarAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "É permitido no máximo 100 caracteres"
        txtAssunto.style.color = 'gray'
        assuntoOk = false
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
            alert("Mensagem enviada!")
    }else{
            alert("Os campos não foram preenchidos corretamente")
    }
}

var cadastro = []

cadastro = JSON.parse(localStorage.getItem('bdCadastro'))
if (cadastro == null) {
    cadastro = []
}

function validarCadastro(name, user, password, confirmpassword) {

    if (name == '' || user == '' || password == '' || confirmpassword == '') {
        alert('Verifique os dados cadastrados. Os campos não podem estar vazios.')
        return false
    }

    if (password != confirmpassword) {
        alert("As senhas não correspondem")
        return false
    } else {
        return true
    }
}

function botaoCadastro() {
    var name = document.getElementById("name").value
    var user = document.getElementById("user").value
    var password = document.getElementById("password").value
    var confirmpassword = document.getElementById("confirmpassword").value

    var possoCadastrar = validarCadastro(name, user, password, confirmpassword)

    if (possoCadastrar == false) {
        return false
    } else {
        alert("Usuário cadastrado com sucesso")
    }

    var dados = {
        nome: name,
        usuario: user,
        senha: password,
        confirmarsenha: confirmpassword
    }

    cadastro.push(dados)
    localStorage.setItem("bdCadastro", JSON.stringify(cadastro))

    document.getElementById("name").value = ""
    document.getElementById("user").value = ""
    document.getElementById("password").value = ""
    document.getElementById("confirmpassword").value = ""
    document.getElementById("name").focus()

    location.href = 'login.html'

}

function botaoLimparCadastros() {
    cadastro = []
    localStorage.setItem("bdCadastro", JSON.stringify(cadastro))
}
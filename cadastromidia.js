function botaoCdmidia() {
    location.href = 'cadastromidia.html'
}


var novamidia = []
novamidia = JSON.parse(localStorage.getItem('bdMidia'))
if (novamidia == null)
    novamidia = []
console.log(novamidia)

function botaoInserirMidia() {
    var nome = document.getElementById("titulo").value
    var categoria = document.getElementById("categoria").value
    var link = document.getElementById("link").value

    var cadastrarMidia = validarCadastro(nome, categoria, link)

    if (cadastrarMidia == false) {
        alert("Verifique os dados")
        return
    } else {
        alert("Filme cadastrado com sucesso")
        location.href = 'catalogo.html'
    }

    var dados = {
        titulo: nome,
        category: categoria,
        imagem: link
    }

    novamidia.push(dados)
    localStorage.setItem("bdMidia", JSON.stringify(novamidia))

    filmeCadastrado()
    alert('Cadastrado com sucesso')
}

function validarCadastro(titulo, category, imagem) {
    if (titulo == '' || category == '' || imagem == '') {
        return false
    } else {
        return true
    }
}

function filmeCadastrado() {
    document.getElementById("titulos").innerHTML = ''

    novamidia.forEach(item => {
        document.getElementById("titulos").innerHTML += `<img src = '${item.imagem}'>`
    });
}

function botaoLimparCadastros() {
    novamidia = []
    localStorage.setItem("bdMidia", JSON.stringify(novamidia))
    document.getElementById(`titulos`).innerHTML = ``
}
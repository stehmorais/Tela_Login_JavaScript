function logar () {
  let login = document.getElementById("login").value
  let senha = document.getElementById("senha").value
  let verifica = document.getElementById("verifications")

  if (login == "admin" && senha == 123456) {
    alert('Sucesso!')
    location.href = "welcome.html"
  } else {
    verifica.innerHTML = "<p>Usuário ou senha incorretos</p>"
    location.href = "index.html"
  }
}

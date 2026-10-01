// --- TESTE DE UNIDADE (JS) ---
function multiplicar(a, b) {
  return a * b;
}

function testarMultiplicacao() {
  console.assert(multiplicar(2, 3) === 6, "Teste 1 de multiplicação falhou!");
  console.assert(multiplicar(-1, 5) === -5, "Teste 2 de multiplicação falhou!");
  console.assert(multiplicar(0, 10) === 0, "Teste 3 de multiplicação falhou!");
  console.log("Todos os testes de multiplicação passaram!");
}

// Executa os testes automatizados na consola
testarMultiplicacao();

// --- TESTE FUNCIONAL (VALIDAÇÃO DE FORMULÁRIO) ---
function validarFormulario(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const idade = document.getElementById("idade").value.trim();
  const msg = document.getElementById("mensagem");

  // Validação: Campo Nome
  if (nome === "") {
    msg.style.color = "red";
    msg.textContent = "⚠️ O campo Nome é obrigatório!";
    return;
  }

  // Validação: Campo E-mail
  if (email === "") {
    msg.style.color = "red";
    msg.textContent = "⚠️ O campo E-mail é obrigatório!";
    return;
  }

  // Validação: Formato do E-mail
  if (!email.includes("@") || !email.includes(".")) {
    msg.style.color = "red";
    msg.textContent = "⚠️ Digite um e-mail com formato válido!";
    return;
  }

  // Validação: Campo Idade
  if (idade === "" || Number(idade) <= 0) {
    msg.style.color = "red";
    msg.textContent = "⚠️ Digite uma idade válida!";
    return;
  }

  // Sucesso
  msg.style.color = "green";
  msg.textContent = "✅ Formulário enviado com sucesso!";
}
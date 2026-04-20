import { db } from "./banco.js";

const botao = document.getElementById("btnEnviar");

if (botao) {
  botao.addEventListener("click", async (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const numero = document.getElementById("numero").value.trim();

    if (!nome || !email || !numero) {
      alert("Preencha todos os campos.");
      return;
    }

    await inserir(nome, email, numero);
  });
}

async function inserir(nome, email, numero) {
  const { error } = await db.from("cadastro").insert([{ nome, email, numero }]);

  if (error) {
    console.log("Erro ao cadastrar:", error);
    alert("Erro ao cadastrar usuário.");
    return;
  }

  alert("Usuário cadastrado com sucesso!");

  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("numero").value = "";
}

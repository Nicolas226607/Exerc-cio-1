import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient(
  "https://fkzrocclknskifynbhrf.supabase.co",
  "sb_publishable_s4jPdDHCpU5jhRr5rv7d0Q_I4upMTgL",
);

const botao = document.getElementById("btn");

botao.addEventListener("click", async () => {
  // pegar valores dos inputs
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  // chamar função
  await inserir(nome, email);
});

async function inserir(nome, email) {
  const { data, error } = await supabase
    .from("usuarios")
    .insert([{ nome: nome, email: email }]);

  if (error) {
    console.log("Erro:", error);
  } else {
    console.log("Sucesso:", data);
  }
}

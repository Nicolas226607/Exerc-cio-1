console.log("app.js carregou");

const supabaseUrl = "https://fkzrocclknskifynbhrf.supabase.co";
const supabaseKey = "sb_publishable_s4jPdDHCpU5jhRr5rv7d0Q_I4upMTgL";

const db = window.supabase.createClient(supabaseUrl, supabaseKey);

window.inserir = async function () {
  console.log("clicou");

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const numero = document.getElementById("numero").value;

  if (!nome || !email || !numero) {
    alert("Preencha todos os campos");
    return;
  }

  const { data, error } = await db
    .from("cadastro")
    .insert([{ nome, email, numero }]);

  if (error) {
    console.log("Erro:", error);
    alert("Erro ao salvar");
  } else {
    console.log("Sucesso:", data);
    alert("Salvo com sucesso!");
  }

  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("numero").value = "";
};
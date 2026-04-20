import { db } from "./banco";

async function listarUsuarios() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  if (!lista) return;

  const { data, error } = await supabase
    .from("usuarios")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.log(error);
    lista.innerHTML = "<p>Erro ao carregar usuarios.</p>";
    return;
  }

  if (!data || data.length === 0) {
    lista.innerHTML = "<p>Nenhum usuário cadastrado.</p>";
    return;
  }

  data.forEach((usuario) => {
    const p = document.createElement("p");
    p.textContent = `${usuario.nome} - ${usuario.email}`;
    lista.appendChild(p);
  });
}

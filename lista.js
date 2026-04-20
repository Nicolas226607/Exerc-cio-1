import { db } from "./banco.js";

async function listarUsuarios() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  const { data, error } = await db
    .from("cadastro")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.log("Erro ao buscar usuários:", error);
    lista.innerHTML = "<p>Erro ao carregar usuários.</p>";
    return;
  }

  if (!data || data.length === 0) {
    lista.innerHTML = "<p>Nenhum usuário cadastrado.</p>";
    return;
  }

  data.forEach((usuario) => {
    const card = document.createElement("div");
    card.className = "card-usuario";

    card.innerHTML = `
      <p><strong>ID:</strong> ${usuario.id}</p>
      <p><strong>Nome:</strong> ${usuario.nome}</p>
      <p><strong>Email:</strong> ${usuario.email}</p>
      <p><strong>Número:</strong> ${usuario.numero}</p>
    `;

    const acoes = document.createElement("div");
    acoes.className = "acoes";

    const btnExcluir = document.createElement("button");
    btnExcluir.className = "btn-excluir";
    btnExcluir.textContent = "Excluir";

    btnExcluir.addEventListener("click", async () => {
      await excluirUsuario(usuario.id);
    });

    acoes.appendChild(btnExcluir);
    card.appendChild(acoes);
    lista.appendChild(card);
  });
}

async function excluirUsuario(id) {
  const confirmar = confirm("Deseja realmente excluir este usuário?");

  if (!confirmar) {
    return;
  }

  const { error } = await db.from("cadastro").delete().eq("id", id);

  if (error) {
    console.log("Erro ao excluir:", error);
    alert("Erro ao excluir usuário.");
    return;
  }

  alert("Usuário excluído com sucesso!");
  listarUsuarios();
}

listarUsuarios();

import { db } from "./banco.js";

const botaoListar = document.getElementById("btnListar");
const lista = document.getElementById("lista");

async function listarUsuarios() {
  lista.innerHTML = "";

  const { data, error } = await db
    .from("cadastro")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error("Erro ao listar usuários:", error);
    alert("Erro ao buscar usuários.");
    return;
  }

  if (!data || data.length === 0) {
    lista.innerHTML = `
      <tr>
        <td colspan="5">Nenhum usuário encontrado.</td>
      </tr>
    `;
    return;
  }

  data.forEach((usuario) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${usuario.id}</td>
      <td>${usuario.nome ?? ""}</td>
      <td>${usuario.email ?? ""}</td>
      <td>${usuario.numero ?? ""}</td>
      <td>
        <button class="btn-excluir" data-id="${usuario.id}">Excluir</button>
      </td>
    `;

    lista.appendChild(tr);
  });
}

async function excluirUsuario(id) {
  const confirmar = confirm("Deseja excluir este usuário?");

  if (!confirmar) return;

  const { error } = await db.from("cadastro").delete().eq("id", id);

  if (error) {
    console.error("Erro ao excluir:", error);
    alert("Erro ao excluir usuário.");
    return;
  }

  listarUsuarios();
}

botaoListar.addEventListener("click", listarUsuarios);

lista.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-excluir")) {
    const id = event.target.getAttribute("data-id");
    excluirUsuario(id);
  }
});

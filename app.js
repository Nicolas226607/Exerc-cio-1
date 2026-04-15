
const supabaseUrl = "https://fkzrocclknskifynbhrf.supabase.co";
const supabaseKey = "b_publishable_s4jPdDHCpU5jhRr5rv7d0Q_I4upMTgL";
const supabase = window.supabase.createClient(supabaseUrl,supabaseKey);

async function inserir(){
  
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const numero = document.getElementById("numero").value;

  if(!nome?.trim()|| !email?.trim() || !numero?.trim()){
    
    alert("Preencha todos os campos para proseguir");
    return;
    
  }

  const { data, error } = await supabase
    .from("cadastro")
    .insert([{ nome: nome, email: email, numero: numero}]);

  if (error) {
    console.log("Erro:", error);
  } else {
    console.log("Sucesso:", data);
  }

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("numero").value = "";
}

async function buscarDados() {
  const { data, error } = await supabase
    .from("cadastro")
    .select("*");

  console.log(data);
}

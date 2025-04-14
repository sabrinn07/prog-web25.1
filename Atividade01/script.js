function buscarEndereco() {
  const cep = document.getElementById("cep").value.replace(/\D/g, '');

  if (cep.length !== 8) {
    alert("CEP inválido. Deve conter 8 números.");
    return;
  }

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => {
      if (data.erro) {
        alert("CEP não encontrado.");
        return;
      }
      const endereco = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
      document.getElementById("endereco").value = endereco;
    })
    .catch(() => {
      alert("Erro ao buscar o CEP.");
    });
}

document.getElementById("cepForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio real do form

  const matricula = document.getElementById("matricula").value.trim();
  const nome = document.getElementById("nome").value.trim();
  const cep = document.getElementById("cep").value.replace(/\D/g, '');
  const endereco = document.getElementById("endereco").value.trim();

  if (
    matricula.length < 3 ||
    nome.length < 3 ||
    cep.length !== 8 ||
    endereco.length < 3
  ) {
    alert("Todos os campos devem estar preenchidos corretamente com no mínimo 3 caracteres.\nO CEP deve conter 8 números.");
    return;
  }

  alert("Formulário enviado com sucesso!");
});

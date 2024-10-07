// Configuração do Firebase (substitua pelos seus dados)
  const firebaseConfig = {
    apiKey: "AIzaSyDBbMoxMMvVT1dHQywU_5KPUJoADJcKHXU",
    authDomain: "talento-tech-fa130.firebaseapp.com",
    projectId: "talento-tech-fa130",
    storageBucket: "talento-tech-fa130.appspot.com",
    messagingSenderId: "110745915583",
    appId: "1:110745915583:web:155bc5f0b8e731416b360a",
    measurementId: "G-LC6WJ9Q6TW"
  };

firebase.initializeApp(firebaseConfig);

// Referência para a coleção de usuários
const database = firebase.database();
const usersRef = database.ref('usuarios');

// Função para adicionar um novo usuário
function adicionarUsuario(nome, email) {
  usersRef.push({
    nome: nome,
    email: email
  })
  .then(() => {
    console.log('Usuário adicionado com sucesso!');
  })
  .catch((error) => {
    console.error('Erro ao adicionar usuário:', error);
  });
}

// Event listener para o formulário
document.getElementById('userForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  adicionarUsuario(nome, email);
  // Limpar os campos do formulário
  document.getElementById('nome').value = '';
  document.getElementById('email').value = '';
});

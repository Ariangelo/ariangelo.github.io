// Configuração do Firebase (substitua pelos seus dados)
const firebaseConfig = {
  // ...
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Referência para a lista de usuários
const userList = document.getElementById('userList');

// Função para adicionar um novo usuário
function addUser(name) {
  database.ref('users').push({ name: name });
}

// Função para carregar a lista de usuários
function loadUsers() {
  database.ref('users').on('value', (snapshot) => {
    userList.innerHTML = '';
    snapshot.forEach((childSnapshot) => {
      const user = childSnapshot.val();
      const li = document.createElement('li');
      li.textContent = user.name;
      userList.appendChild(li);
    });
  });
}

// Event listener para o formulário
document.getElementById('userForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  addUser(name);
  document.getElementById('name').value = '';
});

// Carregar a lista de usuários ao iniciar a página
loadUsers();

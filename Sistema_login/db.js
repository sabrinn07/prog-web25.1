const mysql = require('mysql2');

// Substitua abaixo a senha pelo que você usou no Workbench
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '86116272@Gu', // ← Coloque sua senha real aqui
  database: 'sistema_login'
});

connection.connect(err => {
  if (err) {
    console.error('❌ Erro ao conectar ao MySQL:', err.message);
    return;
  }
  console.log('✅ Conexão com MySQL estabelecida!');
});

module.exports = connection;

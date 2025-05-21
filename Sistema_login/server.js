const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express(); // ← ISSO precisa vir ANTES de qualquer app.use ou app.post

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Serve os arquivos HTML da pasta public

console.log("🚀 Iniciando o servidor...");

app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  console.log("📥 Dados recebidos:", { email, senha });

  db.query(
    'SELECT nivel_acesso FROM usuarios WHERE email = ? AND senha = ?',
    [email, senha],
    (err, results) => {
      if (err) {
        console.error('❌ Erro na consulta SQL:', err);
        return res.status(500).json({ erro: 'Erro interno do servidor' });
      }

      console.log("📦 Resultado da query:", results);

      if (results.length === 0) {
        console.log("⛔ Nenhum usuário encontrado.");
        return res.status(401).json({ acesso: 'negado' });
      }

      const nivel = results[0].nivel_acesso;
      console.log(`✅ Acesso liberado: ${nivel}`);
      res.json({ acesso: nivel });
    }
  );
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em: http://localhost:${PORT}`);
});

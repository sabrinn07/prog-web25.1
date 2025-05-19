const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const mysql = require ('mysql2');

// configuracao do express-handlears
app.engine('handlebars', engine());
app.set('view engine','handlebars');
app.set('views','./views');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const conexao = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '',
    database: 'aula'
});

conexao.connect(function(erro){
    if (erro) throw erro;
    console.log('Conectado no banco de dados!');
});

app.get('/',function(req,res){
   res.render('formulario');
}); 


app.post('/cadastrar',function(req,res){
    let nome = req.bory.nome;
    console.log(req.body);
    res.end();
});

app.get('/listar', function(req,res){
    let sql = 'select * from test';
    conexao.query(sql, function(erro, retorno){
        res.render();
    })
});

app.post('/login', (req, res) => {
    const { nome, email, senha } = req.body;
  
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);
  
    
  });
  

app.listen(4500);


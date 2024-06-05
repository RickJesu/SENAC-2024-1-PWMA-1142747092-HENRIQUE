document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('registration-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Coleta dos dados do formulário
        const formData = {
            nome: document.getElementById('nome').value,
            sobrenome: document.getElementById('sobrenome').value,
            email: document.getElementById('email').value,
            dataNascimento: document.getElementById('data-nascimento').value,
            telefone: document.getElementById('telefone').value,
            endereco: document.getElementById('endereco').value,
            numero: document.getElementById('numero').value,
            cep: document.getElementById('cep').value
        };

        // Converte os dados para JSON
        const jsonData = JSON.stringify(formData);

        // Envio dos dados para o servidor local
        fetch('http://localhost:3000/registrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData
        })
        .then(response => response.json())
        .then(data => {
            console.log('Sucesso:', data);
            alert('Cadastro realizado com sucesso!');
        })
        .catch((error) => {
            console.error('Erro:', error);
            alert('Erro ao realizar o cadastro. Tente novamente.');
        });
    });
});
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/registrar', (req, res) => {
    console.log('Dados recebidos:', req.body);
    res.json({ message: 'Cadastro realizado com sucesso!' });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
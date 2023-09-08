const express = require('express');
const app = express();
const port = 3000;

const path = require("path");
const basePath = path.join(__dirname, 'template');

app.get('/', (req, res) => {
    const filePath = path.join(basePath, 'Projetos.html');
    res.sendFile(filePath);
});

app.listen(port, () => {
    console.log(`App está rodando na porta ${port}`);
});


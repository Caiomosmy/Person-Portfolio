/*Iniciar o Servidor Node.js com Express */

const express = require ('express');
const app = express();
const port = 3000

/*Colocar o caminho do arquivo aonde espera ter o HTML*/
/*Veja se tem o HTML no arquivo template dentro da pasta node*/ 

const path = require("path")
const basePath = path.join(__dirname, "index.html")
/**/

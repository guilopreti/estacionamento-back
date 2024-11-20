import express from "express";
import bodyParser from "body-parser";

//protocolo de comunicacão entre apis e outros serviços cors
//CORS: autoriza para qualquer tipo de serviço (front-end, outras apis,etc)
import cors from "cors";

//importações
import proprietario from "./controllers/ProprietarioControlls.js";
import veiculo from "./controllers/VeiculoControlls.js";

const app = express();
const port = 8081;

//Rotas
app.use(bodyParser.json());

//Função CORS para a autorização do uso da API
app.use(cors());
app.get("/", (req, res) => res.send("Estou aqui"));
app.use("/proprietario", proprietario);
app.use("/veiculo", veiculo);
app.listen(port, () => console.log(`Servidor rodando porta ${port}!`));

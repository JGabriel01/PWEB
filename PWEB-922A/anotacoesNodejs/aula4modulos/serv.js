const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type' : 'text/plain'});
    res.end("Bem-vindo ao meu primeiro servidor http!\n")
});

server.listen(3000, () => {
    console.log("Executando o servidor na porta 3000!")
})

//para abrir o seu servidor, basta digitar http://localhost:3000
//obs: caso você mude a porta do servidor para 80, não precisa adicionar essa mesma porta após o nome "localhost", pois a porta "padrão" do localhost ja é 80, portanto basta digitar http://localhost que ele já vai abrir o seu servidor 
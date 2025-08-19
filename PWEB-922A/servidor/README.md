(1) npm init 
    - utilizado para inicializar um projeto NodeJS
    - Cria o arquivo de configuração: package.json

(2) npm install express
    - o npm instala uma dependência para o nosso projeto
    - express é um pacote para criações de servidores web

(3) app.get("/", (req, res) => {res.send("Olá este é o meu primeiro servidor!")})
    - .get diz ao express para lidar com requisições do tipo GET, que é o padrão dos navegadores
    - "/" significa a "raiz" ou página inicial do site
    - req significa "request" ou "requisição", o req é um objeto que contém todas as requisisções do cliente
    - res significa "response" ou "resposta", o res é um objeto que usamos para enviar a resposta ao cliente
    - res.send é o método que envia a resposta do servidor, que no caso é "Olá este é o meu primeiro servidor" ao cliente

(4) app.listen(port, () => {console.log(`Servidor Ativo na porta ${port}`)})
    - .listen é a função que inicia o servidor e "escuta" as requisições de um cliente, a partir do momento que ele entra no servidor
    - port define a porta local no qual o servidor vai escutar as requisições
    - () => {} é uma função de callback, que é executada quando o servidor percebe uma requisição na porta local
    - console.log(...) é o que o servidor vai fazer quando ele percebe uma requisição através da função de callback 

(5) node index.js
    - Usamos este comando no terminal para inicializar o servidor 
    - para parar o servidor basta teclar "ctrl" + "c"

(6) http://localhost:3000
    - Use esta URL para acessar o seu servidor

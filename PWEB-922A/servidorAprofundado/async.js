// async e await
async function main() {
    console.log("Iniciando o servidor...");
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simula uma operação assíncrona
    console.log("Servidor iniciado!");
}

main();
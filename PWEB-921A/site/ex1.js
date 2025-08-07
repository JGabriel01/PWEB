const formulario = document.createElement('form');
const h1 = document.createElement('h1');
const texto = document.createElement('input');
const botao = document.createElement('button');
const listaUl = document.createElement('ul');

document.body.appendChild(h1);
h1.textContent = 'Lista de Tarefas';

document.body.appendChild(formulario);
formulario.id = 'Formulario';

formulario.appendChild(texto);
texto.type = 'text';
texto.id = 'texto';
texto.placeholder = 'Digite alguma tarefa aqui...'

formulario.appendChild(botao);
botao.textContent = 'Enviar';
botao.id = 'submit';
botao.style.marginLeft = '10px'

document.body.appendChild(listaUl);
listaUl.id = 'listaUl'

let tasks = [];
function carregarTarefa() {
     tasks = JSON.parse(localStorage.getItem('tarefas') || '[]');
     renderizarTarefa();
}

function salvarTarefa() {
    localStorage.setItem('tarefas', JSON.stringify(tasks));
}

function renderizarTarefa() {
    listaUl.innerHTML = '';

    tasks.forEach((tarefa, indice) => {
        const novaLinha = document.createElement('li');
        novaLinha.textContent = tarefa;

        const remover = document.createElement('button');
        remover.style.marginLeft = '10px';
        remover.textContent = 'Remover';
        remover.onclick = () => retirarTarefa(indice);

        listaUl.appendChild(novaLinha);
        novaLinha.appendChild(remover);
    });
}

function adicionarTarefa(tarefas) {
    tasks.push(tarefas);
    renderizarTarefa();
    salvarTarefa();
}

function retirarTarefa(indice) {
    tasks.splice(indice,1);
    renderizarTarefa();
    salvarTarefa();
}

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const tarefaText = texto.value.trim();

    if(tarefaText !== '') {
        adicionarTarefa(tarefaText);
        texto.value = '';
    } else {

    }
})

document.addEventListener('DOMContentLoaded', carregarTarefa);

const Tema = document.createElement('button');
formulario.appendChild(Tema);
Tema.textContent = 'Tema claro/escuro';
Tema.style.marginLeft = '10px';
Tema.id = 'tema';


Tema.addEventListener('click', () => {
    document.body.classList.toggle('tema-escuro')
    if (document.body.classList.contains('tema-escuro')) {
        localStorage.setItem('tema', 'escuro')
    } else {
        localStorage.setItem('tema', 'claro')
    }});

function aplicarTema() {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'escuro') {
        document.body.classList.add('tema-escuro');
    } else {
        document.body.classList.remove('tema-escuro');  
    }
};

document.addEventListener('DOMContentLoaded', aplicarTema);
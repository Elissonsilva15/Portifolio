import card from "./assets/project/Projeto_Noticias/card.js";





document.addEventListener('DOMContentLoaded', () => {
  const containerProjetos = document.getElementById('projetos');
  if (containerProjetos) {
    containerProjetos.appendChild(novoCard);
  }
});






window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("btnsubir").style.display = "block";
  } else {
    document.getElementById("btnsubir").style.display = "none";
  }
};




const botoes = document.querySelectorAll('.btn-sobre');
const detalhes = document.querySelectorAll('.detalhes');
const sair = document.querySelectorAll('.btn-sair');
const inputnome = document.getElementById('inputnome')
const inputMensagem = document.getElementById('inputComentario')
const bntchat = document.querySelector('.btn-chat')
const chat = document.querySelector('.chat')
const Enviarbutton = document.querySelector('.send-button')
const confirmacao = document.querySelector('.confirmacao')





botoes.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const detalhe = detalhes[index];


    const estilo = window.getComputedStyle(detalhe);

    if (estilo.display === 'none') {
      detalhe.style.display = 'block';
    } else {
      detalhe.style.display = 'none';
    }
  });
});

sair.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const detalhe = detalhes[index];


    const estilo = window.getComputedStyle(detalhe);

    if (estilo.display === 'none') {
      detalhe.style.display = 'block';
    } else {
      detalhe.style.display = 'none';
    }
  });
});


bntchat.addEventListener('click', () => {
  const displayAtual = window.getComputedStyle(chat).display;

  if (displayAtual === 'none') {
    chat.style.display = 'block';
  } else {
    chat.style.display = 'none';
  }
});

Enviarbutton.addEventListener('click', () => {
  enviarEmail()


})








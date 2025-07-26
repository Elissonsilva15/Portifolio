// window.addEventListener('scroll', function () {
//   const cabecalho = document.getElementById('cabecalho');
//   if (window.scrollY > 50) {
//     cabecalho.classList.add('scrolled');
//   } else {
//     cabecalho.classList.remove('scrolled');
//   }
// });

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



// const URL = 'https://estudos123456789.app.n8n.cloud/webhook-test/enviar'
const URL = 'https://estudos123456789.app.n8n.cloud/webhook/enviar'

async function enviarEmail() {


  if (inputnome.value.trim() !== '' && inputMensagem.value.trim() !== '') {
    const envaido = {
      nome: inputnome.value,
      mensagem: inputMensagem.value
    };

    try {
      Enviarbutton.innerHTML = `Enviando`
      const enviar = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(envaido)
      });

      Enviarbutton.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
        <path d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.11 13.6501L13.69 10.0601" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`
      inputnome.value = ''
      inputMensagem.value = ``

      chat.style.display = 'none'

      confirmacao.style.display = 'block'

      setTimeout(() => {
        confirmacao.style.display = 'none'
      }, 5000)

      const dados = await enviar.json();

      span.textContent = dados.resposta
    } catch (error) {
      console.error("Erro ao enviar:", error);
    }
  }

}

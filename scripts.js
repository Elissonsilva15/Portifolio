// window.addEventListener('scroll', function () {
//   const cabecalho = document.getElementById('cabecalho');
//   if (window.scrollY > 50) {
//     cabecalho.classList.add('scrolled');
//   } else {
//     cabecalho.classList.remove('scrolled');
//   }
// });

window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop >100) {
    document.getElementById("btnsubir").style.display = "block";
  } else {
    document.getElementById("btnsubir").style.display = "none";
  }
};

const botoes = document.querySelectorAll('.btn-sobre');
const detalhes = document.querySelectorAll('.detalhes');
const sair = document.querySelectorAll('.btn-sair');

// para cada botão
botoes.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const detalhe = detalhes[index]; // pega o "detalhes" correspondente

    // pega o estilo atual
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




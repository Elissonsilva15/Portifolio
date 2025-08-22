const projetos = document.getElementById('projetos')

const interfaces = {
    imagem: 'assets/project/Projeto_Noticias/img/Noticias.png',
    Projeto: 'Portal de Notícias',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    data: '16/08/2025',
}
card(interfaces)

function card(cards) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
        <img src="${cards.imagem}" alt="${cards.Projeto}" class="img-Portifolio">
        <h2>${cards.Projeto}</h2>
        
        <p>🛠️ Tecnologias Utilizadas <br>${cards.tecnologias}</p>
        <p>Adicionado em<br>${cards.data}</p>
    `

    card.addEventListener('click', () => {
        window.location.href = "assets/project/Projeto_Noticias/sobre/sobre.html";
    })

    projetos.appendChild(card)

}
window.location.href = "assets/project/Projeto_Noticias/sobre/sobre.html";

export default card
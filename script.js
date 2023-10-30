const gamesContainer = document.querySelector('.games');

gamesContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('game')) {
    const gameId = e.target.id;
    let gamePath = '';

    if (gameId === '1') {
      // Game 1 in JavaScript
      gamePath = `./Games/game${gameId}/index.html`;
    } else if (gameId === '2') {
      // Game 2 in React (public folder structure)
      gamePath = `https://timely-eclair-6a1620.netlify.app/`;
    } else if(gameId === '3'){
      gamePath = `./Games/game${gameId}/index.html`
    } else if (gameId === '4'){
      gamePath = 'https://653f2a4deb14880c3e9bbdda--prismatic-hummingbird-32f173.netlify.app/'
    }

    window.location.href = gamePath;
  }
});

const game_nav = document.querySelector('.game-section')
const game_list = document.getElementById('games')

game_nav.addEventListener('click',()=>{
  game_list.scrollIntoView({
    behavior:'smooth'
  })
})

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
      gamePath = `./Games/game${gameId}/public/index.html`;
    } else if(gameId === '3'){
      gamePath = `./Games/game${gameId}/index.html`
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

const gamesContainer = document.querySelector('.games');

gamesContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('game')) {
    const gameId = e.target.id;
    window.location.href = `./Games/Game${gameId}/index.html`;
  }
});


const game_nav = document.querySelector('.game-section')
const game_list = document.getElementById('games')

game_nav.addEventListener('click',()=>{
  game_list.scrollIntoView({
    behavior:'smooth'
  })
})
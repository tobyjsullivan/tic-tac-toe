export const CHOOSE_SQUARE = 'CHOOSE_SQUARE';
export const RESTART_GAME = 'RESTART_GAME';

export function chooseSquare(player, index) {
  return {
    type: CHOOSE_SQUARE,
    data: {
      player: player,
      index: index
    }
  };
}

export function restartGame() {
  return {
    type: RESTART_GAME
  };
}

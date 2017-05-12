import { combineReducers } from 'redux';
import { CHOOSE_SQUARE, RESTART_GAME } from './actions';

const PLAYER_X = 'X';
const PLAYER_O = 'O';

var initialGameState = {
  currentPlayer: PLAYER_O,
  winner: null,
  squares: []
};

function chooseSquare(state, player, index) {
  if (state.squares[index]) {
    // Block the move
    return state;
  }


  var squares = [...state.squares];
  squares[index] = player;

  state = Object.assign({}, state, { squares: squares });
  state = checkForWinner(state);
  return nextPlayer(state);
}

function nextPlayer(state) {
  switch (state.currentPlayer) {
    case PLAYER_O:
      return Object.assign({}, state, { currentPlayer: PLAYER_X });
    case PLAYER_X:
      return Object.assign({}, state, { currentPlayer: PLAYER_O });
    default:
      return state;
  }
}

function checkForWinner(state) {
  let winningSets = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningSets.length; i++) {
    let set = winningSets[i];
    if (allSquaresMatch(state.squares, set[0], set[1], set[2])) {
      return Object.assign({}, state, { winner: state.squares[set[0]] });
    }
  }
  return state;
}

function allSquaresMatch(squares, idx0, idx1, idx2) {
  if (squares[idx0] && squares[idx1] && squares[idx2]) {
    if (squares[idx0] === squares[idx1] &&
        squares[idx1] === squares[idx2]) {
      return true;
    }
  }

  return false;
}

function gameReducer(state = initialGameState, action) {
  switch (action.type) {
    case CHOOSE_SQUARE:
      return chooseSquare(state, action.data.player, action.data.index);
    case RESTART_GAME:
      return initialGameState;
    default:
      return state;
  }
}

const ticTacToeApp = combineReducers({
  game: gameReducer
});

export default ticTacToeApp;

const player1 = 1;
const player2 = 2;
function tikTakToe(board, player) {

  const check = (a,b,c) => a === player && b === player && c === player;

  // eslint-disable-next-line no-plusplus
  for(let i = 0; i < 3; i++)
  {
    if (check(board[0][i],board[1][i],board[2][i]) || check(board[i][0],board[i][1],board[i][2]))
    {
        return true;
    }
  }

  if (check(board[0][0],board[1][1],board[2][2]) || check(board[0][2],board[1][1],board[2][0]))
  {
    return true;
  }

  return false;
}

console.log(
  tikTakToe(
    [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ],
    player1
  )
);

console.log(
  tikTakToe(
    [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    player1
  )
);

console.log(
  tikTakToe(
    [
      [0, 0, 0],
      [0, 0, 0],
      [1, 1, 1],
    ],
    player1
  )
);

console.log(
  tikTakToe(
    [
      [1, 0, 0],
      [1, 0, 0],
      [1, 0, 0],
    ],
    player1
  )
);

console.log(
  tikTakToe(
    [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ],
    player1
  )
);

console.log(
  tikTakToe(
    [
      [0, 0, 1],
      [0, 0, 1],
      [0, 0, 1],
    ],
    player1
  )
);

console.log(
  tikTakToe(
    [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ],
    player1
  )
);

console.log(
  tikTakToe(
    [
      [0, 0, 1],
      [0, 1, 0],
      [1, 0, 0],
    ],
    player1
  )
);

console.log(
  tikTakToe(
    [
      [2, 2, 2],
      [0, 0, 0],
      [0, 0, 0],
    ],
    player2
  )
);

console.log(
  tikTakToe(
    [
      [0, 0, 0],
      [2, 2, 2],
      [0, 0, 0],
    ],
    player2
  )
);

console.log(
  tikTakToe(
    [
      [0, 0, 0],
      [0, 0, 0],
      [2, 2, 2],
    ],
    player2
  )
);

console.log(
  tikTakToe(
    [
      [2, 0, 0],
      [2, 0, 0],
      [2, 0, 0],
    ],
    player2
  )
);

console.log(
  tikTakToe(
    [
      [0, 2, 0],
      [0, 2, 0],
      [0, 2, 0],
    ],
    player2
  )
);

console.log(
  tikTakToe(
    [
      [0, 0, 2],
      [0, 0, 2],
      [0, 0, 2],
    ],
    player2
  )
);

console.log(
  tikTakToe(
    [
      [2, 0, 0],
      [0, 2, 0],
      [0, 0, 2],
    ],
    player2
  )
);

console.log(
  tikTakToe(
    [
      [0, 0, 2],
      [0, 2, 0],
      [2, 0, 0],
    ],
    player2
  )
);

console.log(
  tikTakToe(
    [
      [1, 2, 1],
      [1, 2, 2],
      [2, 1, 1],
    ],
    player1
  )
);

console.log(
  tikTakToe(
    [
      [1, 2, 1],
      [1, 2, 2],
      [2, 1, 1],
    ],
    player2
  )
);

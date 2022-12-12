#!/usr/bin/env ts-node
// https://adventofcode.com/2022/day/2

import * as readline from 'node:readline';

// ------

enum Move {
  Rock = 1,
  Paper = 2,
  Scissors = 3,
  Unknown = 0,
}

enum Result {
  Win = 6,
  Draw = 3,
  Lose = 0,
}

enum Opponent {
  Rock = 'A',
  Paper = 'B',
  Scissors = 'C',
}

enum Strategy {
  Lose = 'X',
  Draw = 'Y',
  Win = 'Z',
}

// ------

function stratMove(opponent: Opponent, strat: Strategy): Move {
  const stratMoves = {
    [Strategy.Win]: {
      [Opponent.Rock]: Move.Paper,
      [Opponent.Paper]: Move.Scissors,
      [Opponent.Scissors]: Move.Rock,
    },
    [Strategy.Draw]: {
      [Opponent.Rock]: Move.Rock,
      [Opponent.Paper]: Move.Paper,
      [Opponent.Scissors]: Move.Scissors,
    },
    [Strategy.Lose]: {
      [Opponent.Rock]: Move.Scissors,
      [Opponent.Paper]: Move.Rock,
      [Opponent.Scissors]: Move.Paper,
    },
  };

  return stratMoves[strat][opponent];
}

function stratResult(strat: Strategy): Result {
  switch (strat) {
    case Strategy.Win:
      return Result.Win;
    case Strategy.Draw:
      return Result.Draw;
    case Strategy.Lose:
      return Result.Lose;
  };
}

// ------

let score: number = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', line => {
  const [opponent, strat] = line.split(' ') as [Opponent, Strategy];
  score += stratMove(opponent, strat);
  score += stratResult(strat);
});

rl.once('close', () => {
  console.log(score);
});

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

// ------

function charToMove(char: string): Move {
  switch (char) {
    case 'A':
    case 'X':
      return Move.Rock;
    case 'B':
    case 'Y':
      return Move.Paper;
    case 'C':
    case 'Z':
      return Move.Scissors;
    default:
      return Move.Unknown;
  }
}

function getRoundResult(opponent: Move, me: Move): Result {
  if (opponent === Move.Rock && me === Move.Paper) {
    return Result.Win;
  }

  if (opponent === Move.Scissors && me === Move.Rock) {
    return Result.Win;
  }

  if (opponent === Move.Paper && me === Move.Scissors) {
    return Result.Win;
  }

  if (opponent === me) {
    return Result.Draw;
  }

  return Result.Lose;
}

// ------

let score: number = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', line => {
  const [opponent, me]: number[] = line.split(' ').map(charToMove);
  score += me;
  score += getRoundResult(opponent, me);
});

rl.once('close', () => {
  console.log(score);
});

#!/usr/bin/env ts-node
// https://adventofcode.com/2022/day/1

import * as readline from 'node:readline';

const calories: number[] = [];
let elfIndex = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', line => {
  const count = Number(line);

  if (count === 0) {
    elfIndex += 1;
  } else {
    calories[elfIndex] ||= 0;
    calories[elfIndex] += count;
  }
});

rl.once('close', () => {
  console.log(Math.max(...calories));
});

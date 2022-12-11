#!/usr/bin/env ts-node

// https://adventofcode.com/2022/day/1

import * as readline from 'node:readline/promises';
import { groupBy } from 'lodash';

const elvesRaw: Array<number> = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
  elvesRaw.push(Number(line));
});

rl.once('close', () => {
  const elvesSummed = groupBy(elvesRaw, val => val !== 0);
  console.log(elvesRaw.slice(0, 10));
  console.log(elvesSummed);
});

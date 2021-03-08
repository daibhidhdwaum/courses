import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

const reader = new MatchReader("football.csv");
reader.read();

let LiverpoolWins = 0;

for (let match of reader.data) {
  if (match[1] === "Liverpool" && match[5] === MatchResult.HomeWin) {
    LiverpoolWins++;
  } else if (match[2] === "Liverpool" && match[5] === MatchResult.AwayWin) {
    LiverpoolWins++;
  }
}

console.log(`Liverpool won ${LiverpoolWins} games`);

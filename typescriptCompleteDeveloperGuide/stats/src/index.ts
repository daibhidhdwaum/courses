import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";
import { CsvFileReader } from "./CsvFileReader";

const csvFileReader = new CsvFileReader("football.csv");

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let LiverpoolWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === "Liverpool" && match[5] === MatchResult.HomeWin) {
    LiverpoolWins++;
  } else if (match[2] === "Liverpool" && match[5] === MatchResult.AwayWin) {
    LiverpoolWins++;
  }
}

console.log(`Liverpool won ${LiverpoolWins} games`);

const path = require("path");
const fs = require("fs");

const matches = fs.readFileSync(
  path.join(__dirname, "..", "football.csv"),
  { encoding: "utf-8" }
)
  .split("\n")
  .map((row: string): string[] => row.split(","));

// enum - enumeration - перечисление
enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D"
}

let manUnitedWins: number = 0;

for (let match of matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} times`);
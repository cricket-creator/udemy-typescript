"use strict";
var path = require("path");
var fs = require("fs");
var matches = fs.readFileSync(path.join(__dirname, "..", "football.csv"), { encoding: "utf-8" })
    .split("\n")
    .map(function (row) { return row.split(","); });
// enum - enumeration - перечисление
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
var manUnitedWins = 0;
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won ".concat(manUnitedWins, " times"));

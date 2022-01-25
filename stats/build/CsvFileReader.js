"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs = require("fs");
var path = require("path");
var util_1 = require("./util");
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs.readFileSync(path.join(__dirname, "..", this.filename), { encoding: "utf-8" })
            .split("\n")
            .map(function (row) { return row.split(","); })
            .map(function (row) { return ([
            (0, util_1.dateStringToDate)(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6]
        ]); });
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;

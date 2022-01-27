"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs = require("fs");
var path = require("path");
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs.readFileSync(path.join(__dirname, "..", this.filename), { encoding: "utf-8" })
            .split("\n")
            .map(function (row) { return row.split(","); });
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;

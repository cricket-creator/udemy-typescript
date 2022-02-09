"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = void 0;
var fs = require("fs");
var path = require("path");
var HtmlReport = /** @class */ (function () {
    function HtmlReport() {
    }
    HtmlReport.prototype.print = function (report) {
        var html = "\n      <div>\n        <h1>Analysis Output</h1>\n        <div>".concat(report, "</div>\n      </div>\n    ");
        fs.writeFileSync(path.join(__dirname, "..", "report.html"), html);
    };
    return HtmlReport;
}());
exports.HtmlReport = HtmlReport;

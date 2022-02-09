"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
// import { CsvFileReader } from "./CsvFileReader";
// import { WinsAnalysis } from "./analyzers/WinsAnalysis";
// import { ConsoleReport } from "./reportTargets/ConsoleReport";
// import { HtmlReport } from "./reportTargets/HtmlReport";
// Create an object that implements the DataReader interface
// const csvFileReader = new CsvFileReader("football.csv");
// Create an object of MatchReader and pass DataReader implementation
// const matchReader = new MatchReader(csvFileReader);
var matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
matchReader.load();
// const summary = new Summary(new WinsAnalysis("Man United"), new ConsoleReport());
// const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());
// summary.buildAndPrintReport(matchReader.matches);
var summary1 = Summary_1.Summary.winsAnalysisWithHtmlReport("Man United");
summary1.buildAndPrintReport(matchReader.matches);

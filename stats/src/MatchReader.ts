import { dateStringToDate } from "./util";
import { MatchResult } from "./MatchResult";
import { MatchData } from "./MatchData";
import { CsvFileReader } from "./CsvFileReader";

interface DataReader {
  data: string[][];

  read(): void;
}

export class MatchReader {
  static fromCsv(fileName: string): MatchReader {
    return new MatchReader(new CsvFileReader(fileName));
  }

  matches: MatchData[] = [];

  constructor(public reader: DataReader) {
  }

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => (
      [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult, // 'H', 'A', 'D'
        row[6]
      ])
    );
  }
}
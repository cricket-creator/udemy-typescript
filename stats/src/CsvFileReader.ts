import * as fs from "fs";
import * as path from "path";

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {
  }

  read(): void {
    this.data = fs.readFileSync(
      path.join(__dirname, "..", this.filename),
      { encoding: "utf-8" }
    )
      .split("\n")
      .map((row: string): string[] => row.split(","));
  }
}
"use strict";
/*
import * as fs from "fs";
import * as path from "path";

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {
  }

  abstract mapRow(row: string[]): T

  read(): void {
    this.data = fs.readFileSync(
      path.join(__dirname, "..", this.filename),
      { encoding: "utf-8" }
    )
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(this.mapRow);
  }
}*/

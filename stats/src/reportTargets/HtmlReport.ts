import { OutputTarget } from "../Summary";
import * as fs from "fs";
import * as path from "path";

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
      <div>
        <h1>Analysis Output</h1>
        <div>${report}</div>
      </div>
    `;

    fs.writeFileSync(
      path.join(__dirname, "..", "report.html"),
      html
    );
  }
}
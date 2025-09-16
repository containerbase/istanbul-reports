import path from 'node:path';
import { type Context, type ReportNode } from 'istanbul-lib-report';
import HtmlReport from 'istanbul-reports/lib/html/index.js';

const __dirname = import.meta.dirname;

export default class HljsHtmlReport extends HtmlReport {
  override onStart(root: ReportNode, context: Context): void {
    super.onStart(root, context);
    const writer = this.getWriter(context);
    const srcDir = path.resolve(__dirname, '..', 'vendor');

    writer.copyFile(`${srcDir}/hljs.js`, './prettify.js');
    writer.copyFile(`${srcDir}/hljs.css`, './prettify.css');
  }
}

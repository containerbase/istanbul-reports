declare module 'istanbul-reports/lib/html/index.js' {
  import { type Context, type FileWriter, ReportBase, type ReportNode, type Visitor } from 'istanbul-lib-report';
  class HtmlReport extends ReportBase implements Visitor<ReportNode> {
    onStart(root: ReportNode, state: Context): void;
    onSummary(root: ReportNode, state: Context): void;
    onDetail(root: ReportNode, state: Context): void;
    onSummaryEnd(root: ReportNode, state: Context): void;
    onEnd(root: ReportNode, state: Context): void;

    protected getWriter(context: Context): FileWriter;
  }

  export = HtmlReport;
}

import * as React from "react";
import styles from "./EmployeeReport.module.scss";
import { IEmployeeReportProps } from "./IEmployeeReportProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { sp } from "@pnp/sp/presets/all";
import App from "./App";
export default class EmployeeReport extends React.Component<
  IEmployeeReportProps,
  {}
> {
  constructor(prop: IEmployeeReportProps, state: {}) {
    super(prop);
    sp.setup({
      spfxContext: this.props.context,
    });
  }
  public render(): React.ReactElement<IEmployeeReportProps> {
    return <App sp={sp} context={this.props.context} />;
  }
}

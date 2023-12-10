import * as React from "react";
import styles from "./EmployeeDocument.module.scss";
import { IEmployeeDocumentProps } from "./IEmployeeDocumentProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { sp } from "@pnp/sp/presets/all";
import {
  PeoplePicker,
  PrincipalType,
} from "@pnp/spfx-controls-react/lib/PeoplePicker";
import App from "./App";
export default class EmployeeDocument extends React.Component<
  IEmployeeDocumentProps,
  {}
> {
  constructor(prop: IEmployeeDocumentProps, state: {}) {
    super(prop);
    sp.setup({
      spfxContext: this.props.context,
    });
  }
  public render(): React.ReactElement<IEmployeeDocumentProps> {
    return <App context={this.props.context} spfx={sp} />;
  }
}

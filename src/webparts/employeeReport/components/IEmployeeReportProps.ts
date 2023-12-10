import { WebPartContext } from "@microsoft/sp-webpart-base";
import { Context } from "react";

export interface IEmployeeReportProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  context: WebPartContext;
}
export interface IAppProps {
  sp: any;
  context: WebPartContext;
}

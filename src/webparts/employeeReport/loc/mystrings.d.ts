declare interface IEmployeeReportWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
}

declare module 'EmployeeReportWebPartStrings' {
  const strings: IEmployeeReportWebPartStrings;
  export = strings;
}

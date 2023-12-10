declare interface IEmployeeDocumentWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
}

declare module 'EmployeeDocumentWebPartStrings' {
  const strings: IEmployeeDocumentWebPartStrings;
  export = strings;
}

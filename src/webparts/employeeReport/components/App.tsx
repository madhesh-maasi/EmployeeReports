import * as React from "react";
import { useEffect, useState } from "react";
import { IAppProps } from "./IEmployeeReportProps";
import { sp } from "@pnp/sp/presets/all";
import styles from "./App.module.scss";
import "./style.scss";
// import { UrlQueryParameterCollection } from '@microsoft/sp-core-library';
let objEmployeeDetails = {
  Name: "",
  EmpID: "",
  EmpStatus: "",
  DOB: "",
  CCCode: "",
};
const App = (props) => {
  const [masterData, setMasterData] = useState(objEmployeeDetails);
  const getData = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const empID = urlParams.get("empid");
    console.log(empID);
    props.sp.web.lists
      .getByTitle("Employee")
      .items.filter(`EmployeeID eq ${empID}`)
      .get()
      .then((res) => {
        console.log(res);
        // setMasterData(res[0]);
        objEmployeeDetails.Name = res[0].Title;
        objEmployeeDetails.EmpID = res[0].EmployeeID;
        objEmployeeDetails.EmpStatus = res[0].Status;
        objEmployeeDetails.DOB = new Date(res[0].DOB).toLocaleDateString();

        props.sp.web.lists
          .getByTitle("CostCentre")
          .items.filter(`EmployeeID eq ${empID}`)
          .get()
          .then((ccres) => {
            console.log(ccres);
            objEmployeeDetails.CCCode = ccres[0].Title;
            setMasterData({ ...objEmployeeDetails });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.employeeDetails}>
      {/* Field */}
      <div className={styles.field}>
        <div className={styles.fieldLabel}>Name</div>
        <div className={styles.fieldValue}>{masterData.Name}</div>
      </div>
      {/* Field */}
      {/* Field */}
      <div className={styles.field}>
        <div className={styles.fieldLabel}>Employee ID</div>
        <div className={styles.fieldValue}>{masterData.EmpID}</div>
      </div>
      {/* Field */}
      {/* Field */}
      <div className={styles.field}>
        <div className={styles.fieldLabel}>Employee Status</div>
        <div className={styles.fieldValue}>{masterData.EmpStatus}</div>
      </div>
      {/* Field */}
      {/* Field */}
      <div className={styles.field}>
        <div className={styles.fieldLabel}>Date of Birth</div>
        <div className={styles.fieldValue}>{masterData.DOB}</div>
      </div>
      {/* Field */}
      {/* Field */}
      <div className={styles.field}>
        <div className={styles.fieldLabel}>Cost Centre Code</div>
        <div className={styles.fieldValue}>{masterData.CCCode}</div>
      </div>
      {/* Field */}
    </div>
  );
};
export default App;

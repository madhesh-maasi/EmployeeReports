import * as React from "react";
import {
  FilePicker,
  IFilePickerResult,
} from "@pnp/spfx-controls-react/lib/FilePicker";
import { sp } from "@pnp/sp/presets/all";
import { useState, useEffect } from "react";
import styles from "./App.module.scss";
const arrLibs = ["Doc Lib 1", "Doc Lib 2", "Doc Lib 3", "Doc Lib 4"];
const App = (props) => {
  const [selectedLib, setSelectedLib] = useState("Doc Lib 1");
  const _onFilePickerChange = (result) => {
    if (result && result.length > 0) {
      // Handle selected files
      const files = result;
      // Upload files to document library or perform other actions
      console.log(files);
      handleUploadFile(files);
    }
  };
  const handleUploadFile = async (files) => {
    files.forEach((file) => {
      file.downloadFileContent().then((res) => {
        sp.web
          .getFolderByServerRelativePath(`/sites/EmployeeReport/${selectedLib}`)
          .files.add(file.fileName, res, true)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
      });
    });
  };
  return (
    <div className={styles.empDocumnets}>
      <div className={styles.leftNav}>
        {arrLibs.map((lib) => {
          return <div className={styles.navMenu}>{lib}</div>;
        })}
      </div>
      <div>
        <FilePicker
          context={props.context}
          onSave={(result) => {
            _onFilePickerChange(result);
          }}
          // onChange={_onFilePickerChange}
          hideLocalMultipleUploadTab={false}
          hideLocalUploadTab={false}
          buttonLabel="Select Files"
          buttonIcon="FileImage"
          hideOneDriveTab={true}
          hideWebSearchTab={true}
          allowExternalLinks={false}
          hideLinkUploadTab={true}
          hideStockImages={true}
          hideSiteFilesTab={true}
          hideRecentTab={true}
        />
      </div>
    </div>
  );
};
export default App;

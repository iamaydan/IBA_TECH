import React, { useState } from "react";
import Button from "./components/Button";
import { Modal } from "./components/Modal";

function App() {
  const [firstModalStatus, setFirstModalStatus] = useState(false);
  const [secondModalStatus, setSecondModalStatus] = useState(false);

  const toggleFirstModal = () => {
    setFirstModalStatus(v => !v);
    document.body.style.backgroundColor = "#312E2E";
  };

  const toggleSecondModal = () => {
    setSecondModalStatus(v => !v);
    document.body.style.backgroundColor = "#312E2E";
  };

  const toggleAndDelete = () => {
    setFirstModalStatus(v => !v);
    alert("Your file was successfully deleted");
    document.body.style.backgroundColor = "black";
  };

  const toggleAndClose = () => {
    setFirstModalStatus(v => !v);
    document.body.style.backgroundColor = "black";
  };

  const toggleAndRename = () => {
    setSecondModalStatus(v => !v);
    alert("Your file was successfully renamed");
    document.body.style.backgroundColor = "black";
  };

  const toggleAndClose2 = () => {
    setSecondModalStatus(v => !v);
    document.body.style.backgroundColor = "black";
  };

  return (
    <div className="App">
      <Button
        backgroundColor="red"
        text="Open first modal window"
        onClick={toggleFirstModal}
      />
      <Button
        backgroundColor="green"
        text="Open second modal window"
        onClick={toggleSecondModal}
      />
      {firstModalStatus && (
        <Modal
          header="Do you want to delete this file?"
          closeIcon={true}
          text="Once you delete this file, it won’t be possible to undo this action.
          Are you sure you want to delete it?"
          close={toggleAndClose}
          buttons={[
            <Button
              backgroundColor="rgba(0, 0, 0, 0.2)"
              text="Ok"
              onClick={toggleAndDelete}
            />,
            <Button
              backgroundColor="rgba(0, 0, 0, 0.2)"
              text="Cancel"
              onClick={toggleAndClose}
            />
          ]}
        />
      )}

      {secondModalStatus && (
        <Modal
          header="Do you want to rename this file?"
          closeIcon={true}
          text="Once you rename this file, you will lose all of your current paths related to this file."
          close={toggleAndClose2}
          buttons={[
            <Button
              key={1}
              backgroundColor="rgba(0, 0, 0, 0.2)"
              text="Ok"
              onClick={toggleAndRename}
            />,
            <Button
              key={2}
              backgroundColor="rgba(0, 0, 0, 0.2)"
              text="Cancel"
              onClick={toggleAndClose2}
            />
          ]}
        />
      )}
    </div>
  );
}

export default App;

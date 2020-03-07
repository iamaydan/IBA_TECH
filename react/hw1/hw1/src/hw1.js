import React, { useState } from "react";

function Homework() {
    const [show, setShow] = useState(false);

      const ShowModal = () => {
          setShow(true)
    } 

    return (
      <div>
            <button  onClick={ShowModal}> Open first modal </button>
            <button>Open second modal</button>
      </div>
  );
}

export default Homework;
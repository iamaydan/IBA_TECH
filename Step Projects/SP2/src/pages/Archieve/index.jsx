import React, { useContext } from "react";

import { Notes } from "../../components";
import { Row } from "../../commons";
import { NotesContext } from "../../context/notes";

export const Archieve = () => {
  const notes = useContext(NotesContext);
  return (
    <Row columns={4}>
      {notes
        .filter(item => item.arch === true)
        .map(item => (
          <Notes key={item.id} notes={item} />
        ))}
    </Row>
  );
};

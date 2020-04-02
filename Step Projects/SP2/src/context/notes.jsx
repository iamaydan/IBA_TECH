import React, { useState, useEffect, createContext } from "react";

import { getNotes } from "../API/fetch";

export const NotesContext = createContext();

export const NotesContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const answer = await getNotes();
      setData(answer);
    })();
  }, []);
  return <NotesContext.Provider value={data}>{children}</NotesContext.Provider>;
};

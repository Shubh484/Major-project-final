import { React, createContext, useState } from "react";

export const DetailContext = createContext();

export const DetailContextProvider = (props) => {
  const [details, setDetails] = useState([]);

  return (
    <DetailContext.Provider value={{ details, setDetails }}>
      {props.children}
    </DetailContext.Provider>
  );
};

import { useState } from "react";
import AppCont from "./AppCont";

const AppProvider = ({ children }) => {
  const [appState, setAppState] = useState({ count: 0 });
  return (
    <AppCont.Provider value={{ appState, setAppState }}>
      <div className="container mx-auto p-4">{children}</div>
    </AppCont.Provider>
  );
};

export default AppProvider;

import React, { useState } from "react";

const AlertContext = React.createContext({});

export function AlertContextProvider(props) {
  const [alert, setAlert] = useState("");
  const handleChangeAlert = (input) => {
    setAlert(input);
    if (input.timer === true) {
      setTimeout(() => {
        setAlert("");
      }, 2000);
    }
  };

  const context = {
    alert,
    setAlert: handleChangeAlert,
  };

  return (
    <AlertContext.Provider value={context}>
      {props.children}
    </AlertContext.Provider>
  );
}

export default AlertContext;

import React, { useState } from 'react';

const AlertContext = React.createContext({});

export function AlertContextProvider(props) {

  const [alert, setAlert] = useState("")
  const context = {
    alert,
    setAlert
  }

  return <AlertContext.Provider value={context}>
    {props.children}
  </AlertContext.Provider>
}

export default AlertContext;
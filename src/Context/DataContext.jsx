// DataContext.js
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataContextProvider = ({ children }) => {
  const [roleWiseData, setRoleWiseData] = useState(null);

  return (
    <DataContext.Provider value={{ roleWiseData, setRoleWiseData }}>
      {children}
    </DataContext.Provider>
  );
};

import React, { createContext, useState } from 'react';
import { navItems } from './utils/constants';

export const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [page, setPage] = useState(navItems[0]);

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};
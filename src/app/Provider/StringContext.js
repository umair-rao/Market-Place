'use client'

import React, { createContext, useState } from 'react';

export const StringContext = createContext();

export const StringProvider = ({ children }) => {
  const [stringToPass, setStringToPass] = useState('');

  return (
    <StringContext.Provider value={{ stringToPass, setStringToPass }}>
      {children}
    </StringContext.Provider>
  );
};

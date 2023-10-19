'use client'

import React, { createContext, useState } from 'react';

export const StringContext = createContext();

export const StringProvider = ({ children }) => {
  const [stringToPass, setStringToPass] = useState('');
  const [searchWord, setSearchWord] = useState('');

  return (
    <StringContext.Provider value={{ stringToPass, setStringToPass, searchWord, setSearchWord }}>
      {children}
    </StringContext.Provider>
  );
};

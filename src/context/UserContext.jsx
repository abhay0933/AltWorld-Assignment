// UserContext.js
import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = (props) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [shortList, setShortList] = useState([]);

  return (
    <UserContext.Provider value={{ selectedUser, setSelectedUser, setShortList, shortList }}>
      {props.children}
    </UserContext.Provider>
  );
};

export const UseUser = () => {
  const context = useContext(UserContext);
  return context;
};

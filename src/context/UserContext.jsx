import { createContext } from "react";

export const DataContext = createContext();

const UserContext = ({ children }) => {
  const userData = {
    username: "Kunal Paraye",
    age: 23,
    city: "Bhopal",
  };

  return (
    <DataContext.Provider value={userData}>{children}</DataContext.Provider>
  );
};

export default UserContext;

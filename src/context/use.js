import { useState, createContext } from "react";

export const UserContext = createContext({});

function UserProvider({ children }) {
  const [alunos, setAlunos] = useState("Matheus");
  const [atdAlunos, setQtdAlunos] = useState(85);

  return (
    <UserContext.Provider value={{ alunos, setAlunos, atdAlunos }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;

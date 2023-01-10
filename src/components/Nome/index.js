import { UserContext } from "../../context/use";
import { useContext } from "react";
function Nome() {
  const { alunos, setAlunos } = useContext(UserContext);
  return (
    <div>
      <span style={{ color: "red" }}>seja bem vindo: {alunos}</span>
      <br />
      <button onClick={() => setAlunos("Jefferson")}>trocar Nome</button>
    </div>
  );
}

export default Nome;

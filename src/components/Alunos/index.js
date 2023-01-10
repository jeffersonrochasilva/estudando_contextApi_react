import Nome from "../Nome/index";
import { UserContext } from "../../context/use";
import { useContext } from "react";
function Alunos() {
  const { atdAlunos } = useContext(UserContext);
  return (
    <div>
      <h2>quantidade de Alunos: {atdAlunos}</h2>
      <Nome />
    </div>
  );
}

export default Alunos;

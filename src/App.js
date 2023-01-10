import Alunos from "./components/Alunos/index";
import UserProvider from "./context/use";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <h1>hello word</h1>
        <h3>context Api</h3>
        <Alunos />
      </div>
    </UserProvider>
  );
}

export default App;

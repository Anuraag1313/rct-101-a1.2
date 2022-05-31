import "./App.css";
import "./components/logo";
import Logo from "./components/logo";
import Links from "./components/links";
import Button from "./components/button";

const info = ["Services", "Projects", "About"];

function App() {
  return (
    <div className="navBar">
      <Logo></Logo>
      <Links {...info[0]}></Links>
      <Links {...info[0]}></Links>
      <Links {...info[0]}></Links>
      <Button></Button>
    </div>
  );
}

export default App;

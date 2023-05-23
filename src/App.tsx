import "./App.css";
import Launches from "./components/Launches";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header Heading="Typescript-exploration" BackBtnVisable={false} />
      <Launches />
    </>
  );
}

export default App;

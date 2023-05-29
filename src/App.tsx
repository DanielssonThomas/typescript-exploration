import "./App.css";
import Launches from "./pages/index";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import LaunchInfo from "./pages/LaunchInfo";

function App() {
  return (
    <>
      <Header Heading="Typescript-exploration" />
      <Routes>
        <Route path="/" element={<Launches />} />
        <Route path="/launch/:id" element={<LaunchInfo />} />
      </Routes>
    </>
  );
}

export default App;

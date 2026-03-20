import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/navigation/navigation";

const navigationData = fetch("/navbar.json").then(res => res.json());

function App() {
  return (
    <>
      <Navbar navigationData={navigationData} />
    </>
  );
}

export default App;

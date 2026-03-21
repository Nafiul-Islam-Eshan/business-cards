import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/navigation/navigation";
import PricingOptions from "./PricingOptions/PricingOptions";

const navigationData = fetch("/navbar.json").then(res => res.json());
const pricingOptionsData = fetch("/pricingOptions.json").then(res => res.json())

function App() {
  return (
    <>
      <Navbar navigationData={navigationData} />
      <Suspense fallback={<span className="loading loading-spinner loading-xl text-white"></span>} >
        <PricingOptions pricingOptionsData={pricingOptionsData} ></PricingOptions>
      </Suspense>
    </>
  );
}

export default App;

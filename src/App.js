import "./App.css";
import Customers from "./components/Customers";
import { useState } from "react";

function App() {
  const [showCustomers, setShowCustomers] = useState(false);
  return (
    <div className="App">
      <button
        onClick={() => {
          setShowCustomers(!showCustomers);
        }}
      >
        {showCustomers ? "Hide customers bro" : "Show customers bro"}
      </button>
      {showCustomers ? <Customers /> : null}
    </div>
  );
}

export default App;

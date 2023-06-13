import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseData from "./components/data/ExpenseData"
import "./styling/App.css";
import React from "react";

function App() {
  
  return (
    <div className="App">
      <NewExpense />
      <ExpenseData />
    </div>
  );
}

export default App;

import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseData from "./components/data/ExpenseData"
import "./styling/App.css";
import React from "react";

function App() {

  const addExspenseHandler = exspense => {
    console.log("in App.js");
    console.log(exspense);
  }
  
  return (
    <div className="App">
      <NewExpense onAddExspense={addExspenseHandler}/>
      <ExpenseData/>
    </div>
  );
}

export default App;

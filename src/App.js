import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseData from "./components/data/ExpenseData"
import "./styling/App.css";
import React, {useState} from "react";

const DUMMY_EXSPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
   const [exspenses, setExspenses]= useState(DUMMY_EXSPENSES);

  const addExspenseHandler = exspense => {
    setExspenses(prevExspenses => {
      return[exspense, ...prevExspenses];
    });
  }
   // parent  of data/exspenseData.js
  
  return (
    <div className="App">
      <NewExpense onAddExspense={addExspenseHandler}/>
      <ExpenseData items={exspenses}/>
    </div>
  );
}

export default App;
 
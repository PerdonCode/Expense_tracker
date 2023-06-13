import React from "react";
import './NewExspense.css'
import ExspenseForm from "./ExspenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExspense(expenseData);
    }

  return (
    <div className="new-exspense">
      <ExspenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;

import React from "react";
import "./ExpenseItem.css"
// function always has to start with a Capital
const ExpenseItem = () => {
  return (
    <div className="expense-item" >
      <div> march 28 2023</div>
      <div className="expense-item_description">
        <h2> Car Insurance</h2>
        <div className="expense-item__price">4000</div>
      </div>
    </div>
  );
};
export default ExpenseItem;

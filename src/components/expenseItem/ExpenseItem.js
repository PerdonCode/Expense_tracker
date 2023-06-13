import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
// function always has to start with a Capital
const ExpenseItem = ({ title, amount, date }) => {
  return (
    <div className="expense-item">
      {/* set date to string otherwise it will give an error */}
      <ExpenseDate date={date} />
      <div className="expense-item_description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </div>
  );
};
export default ExpenseItem;

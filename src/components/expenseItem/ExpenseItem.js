import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../Card/Card";
// function always has to start with a Capital
const ExpenseItem = ({ title, amount, date }) => {
  return (
    <Card className="expense-item">
      {/* set date to string otherwise it will give an error */}
      <ExpenseDate date={date} />
      <div className="expense-item_description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </Card>
  );
};
export default ExpenseItem;

import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../Card/Card";
import { useState } from "react";
// function always has to start with a Capital

const ExpenseItem = ({ title, amount, date }) => {
  // cant call in nested function
  // why const? it is per component instance based
  // must use [] because it returns an element with 2 objects
 
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

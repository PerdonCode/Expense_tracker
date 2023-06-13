import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../Card/Card";
import { useState } from "react";
// function always has to start with a Capital

const ExpenseItem = ({ title, amount, date }) => {
  // cant call in nested function 
  // why const? 
  // must use [] because it retunds an element with 2 objects
  const [newTitle, setNewTitle] = useState('');

  const handleOnClick = () => {
    setNewTitle('Updated!');
  }

  return (
    <Card className="expense-item">
      {/* set date to string otherwise it will give an error */}
      <ExpenseDate date={date} />
      <div className="expense-item_description">
        <h2>{newTitle ? newTitle : title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={handleOnClick}>change title</button>
    </Card>
  );
};
export default ExpenseItem;

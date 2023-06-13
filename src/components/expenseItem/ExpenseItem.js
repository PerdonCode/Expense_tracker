import React from "react";
import "./ExpenseItem.css"
// function always has to start with a Capital
const ExpenseItem = (props) => {

    const {title, amount, date} = props;

  return (
    <div className="expense-item">
        {/* set date to string otherwise it will give an error */}
      <div>{date.toISOString()}</div>
      <div className="expense-item_description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </div>
  );
};
export default ExpenseItem;

import React, { useState } from "react";
import ExpenseItem from "../expenseItem/ExpenseItem";
import Card from "../Card/Card";
import "./Expenses.css";
import ExpensesFilter from "../exspenseFilter/ExspensesFilter";

const ExpenseData = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card classNames="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => {
          return <ExpenseItem {...expense} key={expense.id} />;
        })}
      </Card>
    </div>
  );
};

export default ExpenseData;

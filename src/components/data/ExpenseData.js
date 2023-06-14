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

  let filteredData = props.items.filter((filtered) => {
    const expenseYear = new Date(filtered.date).getFullYear();
    return expenseYear === parseInt(filteredYear);
  });

  console.log(filteredYear);
  return (
    <div>
      <Card classNames="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {filteredData.length === 0 && <p>no exspenses this year</p>}
        {filteredData.length > 0 &&
          filteredData.map((expense) => {
            return <ExpenseItem {...expense} key={expense.id} />;
          })}
      </Card>
    </div>
  );
};

export default ExpenseData;

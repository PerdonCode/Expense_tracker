import React, {useState } from "react";
import ExpenseItem from "../expenseItem/ExpenseItem";
import Card from "../Card/Card";
import "./Expenses.css";
import ExpensesFilter from "../exspenseFilter/ExspensesFilter";

const ExpenseData = () => {
  const expenses = [
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
  
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {

    setFilteredYear(selectedYear);
  }
  return (
    <div>
      <Card classNames="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {expenses.map((expense) => {
          return <ExpenseItem {...expense} key={expense.id} />;
        })}
      </Card>
    </div>
  );
};

export default ExpenseData;

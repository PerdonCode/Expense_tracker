import React, {useState} from "react";
import "./ExspenseForm.css";

const ExspenseForm = () => {
     const [enteredTitle, setEnteredTitle] = useState('');
     const [enteredAmount, setEnteredAmount] = useState(0);
     const [enteredDate, setEnteredDate] = useState('2023-01-01');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });
    // when the function syntax depends on the previous state use this function form
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value
        //        }});

    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput((prevState) => {
        // return {
        //     ...prevState,
        //     enteredAmount: event.target.value
        //    }});
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredDate: event.target.value
        //        }});
    }

    const submitHandler = (event) => {
        event.preventDefault();
    }

  return (
      <form onSubmit={submitHandler}>
        <div className="new-exspense__controls">
          <div className="new-exspense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} />
          </div>
          <div className="new-exspense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
          </div>
          <div className="new-exspense__control">
            <label>Date</label>
            <input type="date" min="2022-01-01" max="2028-01-01" onChange={dateChangeHandler}/>
          </div>
          <div className="new-exspense__action">
            <button type="submit">Add Exspense</button>
          </div>
        </div>
      </form>
  );
};

export default ExspenseForm;

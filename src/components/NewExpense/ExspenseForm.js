import React from "react";
import "./ExspenseForm.css";

const ExspenseForm = () => {
  return (
      <form>
        <div className="new-exspense__controls">
          <div className="new-exspense__control">
            <label>Title</label>
            <input type="text" />
          </div>
          <div className="new-exspense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01"/>
          </div>
          <div className="new-exspense__control">
            <label>Date</label>
            <input type="date" min="2022-01-01" max="2028-01-01"/>
          </div>
          <div className="new-exspense__action">
            <button type="submit">Add Exspense</button>
          </div>
        </div>
      </form>
  );
};

export default ExspenseForm;

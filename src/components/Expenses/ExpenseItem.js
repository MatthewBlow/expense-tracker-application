import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [isSelected, setIsSelected] = useState(false);

  const startSelectHandler = (event) => {
    setIsSelected(true);
    console.log("Selected is now true!")
  }

  const stopSelectHandler = (event) => {
    event.preventDefault();
    setIsSelected(false);
    console.log("Selected is now false!")
  }

  const deleteHandler = () => {
    console.log("props.id is: " + props.id);
    props.onRemoveItem(props.id);
  }

  return (
   <li>
     {!isSelected && <Card className="expense-item">
        <ExpenseDate date={props.date}  />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">€{props.amount}</div>
          <button className="expense-item__delete" onClick={startSelectHandler}>X</button>
        </div>
      </Card> }
      {isSelected && <Card className="expense-item" onClick={stopSelectHandler}>
        <ExpenseDate date={props.date}  />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">€{props.amount}</div>
        </div>
        <div>
          <button className="expense-item__actions" onClick={deleteHandler}>Delete</button>
          <button className="expense-item__actions" onClick={stopSelectHandler}>Cancel</button>
        </div>
      </Card>}
    </li>
  
  );
};

export default ExpenseItem;

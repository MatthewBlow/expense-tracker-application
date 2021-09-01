import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpenseList = (props) => {
    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">No Expenses Found.</h2>
    }

    return (
     <ul className="expenses-list">
    {props.items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      id={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      onRemoveItem={props.onDelete}
    />
  ))}
</ul>)
}

export default ExpenseList; 
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  { id: "e1", title: "PC setup", amount: 3530, date: new Date(2021, 2, 28) },
  { id: "e2", title: "Car", amount: 3730, date: new Date(2021, 5, 28) },
  { id: "e3", title: "House", amount: 4530, date: new Date(2021, 8, 28) },
  { id: "e4", title: "Shoes", amount: 4353, date: new Date(2021, 3, 28) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;

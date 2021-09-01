import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  { id: "e1", title: "PC setup", amount: 3530, date: new Date(2021, 2, 25) },
  { id: "e2", title: "Car", amount: 3730, date: new Date(2021, 5, 17) },
  { id: "e3", title: "House", amount: 4530, date: new Date(2021, 8, 19) },
  { id: "e4", title: "Shoes", amount: 4353, date: new Date(2021, 3, 23) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  }

  const deleteExpenseHandler = expenseID => {
    setExpenses(prevExpenses => {
      const updatedExpenses = prevExpenses.filter(expense => expense.id !== expenseID);
      return updatedExpenses;
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} onDeleteExpense={deleteExpenseHandler} />
    </div>
  );
}

export default App;

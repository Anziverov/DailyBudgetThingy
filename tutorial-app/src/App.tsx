import "./App.css";
import { Expense } from "./ExpenseClass";
import ExpenseSection from "./ExpenseSection";
import IncomeSection from "./IncomeSection";
import MonthlyBudgetSection from "./MonthlyBudgetSection";
import { useState } from "react";

function App() {
  const [income, setIncome] = useState<number | null>(null);
  const [expense, setExpense] = useState<Expense[] | null>(null);

  return (
    <>
      <IncomeSection income={income} setIncome={setIncome} />
      <ExpenseSection expense={expense} setExpense={setExpense} />
      <MonthlyBudgetSection expenses={expense} income={income} />
    </>
  );
}

export default App;

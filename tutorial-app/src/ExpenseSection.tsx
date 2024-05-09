import { useState } from "react";
import ExpenseInput from "./ExpenseInput";
import ExpenseDisplay from "./ExpenseDisplay";
import { Expense } from "./ExpenseClass";

function ExpenseSection() {
  const [expense, setExpense] = useState<Expense[] | null>(null);

  return (
    <>
      <ExpenseInput expenses={expense} setExpenses={setExpense} />
      <ExpenseDisplay expenses={expense} />
    </>
  );
}

export default ExpenseSection;

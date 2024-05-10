import { useState } from "react";
import { Expense } from "./ExpenseClass";

export interface ExpenseInputProps {
  expenses: Expense[] | null;
  setExpenses: (value: Expense[] | null) => void;
}

function ExpenseInput(expenseInputProps: ExpenseInputProps) {
  const { expenses, setExpenses } = expenseInputProps;
  const [expense, setExpense] = useState<Expense | null>(
    new Expense(0, "", 0, new Date())
  );

  const newId = expenses
    ? Math.max(...expenses.map((expense) => expense.id)) + 1
    : 0;

  return (
    <>
      <input
        type="text"
        placeholder="Enter Expense Name"
        onChange={(e) => handleNameChange(e, setExpense, expense)}
        value={expense?.title || ""}
      />
      <input
        type="number"
        placeholder="Enter Expense"
        onChange={(e) => handleNumberChange(e, setExpense, expense)}
        value={expense?.amount || 0}
      />
      <input
        type="date"
        value={expense?.date ? expense.date.toISOString().split("T")[0] : ""}
        onChange={(e) => handleDateChange(e, setExpense, expense)}
      />
      <button
        onClick={() =>
          setExpenses([
            ...(expenses ?? []),
            {
              id: newId,
              title: expense?.title || "",
              amount: expense?.amount || 0,
              date: expense?.date || new Date(),
            },
          ] as [Expense])
        }
      >
        Log Expense
      </button>
    </>
  );
}

function handleNameChange(
  e: React.ChangeEvent<HTMLInputElement>,
  setExpense: (value: Expense | null) => void,
  expense: Expense | null
) {
  setExpense(
    new Expense(
      expense?.id || 0,
      e.target.value,
      expense?.amount || 0,
      expense?.date || new Date()
    )
  );
}

function handleNumberChange(
  e: React.ChangeEvent<HTMLInputElement>,
  setExpense: (value: Expense | null) => void,
  expense: Expense | null
) {
  setExpense(
    new Expense(
      expense?.id || 0,
      expense?.title || "",
      e.target.value ? parseInt(e.target.value) : 0,
      expense?.date || new Date()
    )
  );
}

function handleDateChange(
  e: React.ChangeEvent<HTMLInputElement>,
  setExpense: (value: Expense | null) => void,
  expense: Expense | null
) {
  setExpense(
    new Expense(
      expense?.id || 0,
      expense?.title || "",
      expense?.amount || 0,
      e.target.value ? new Date(e.target.value) : new Date()
    )
  );
}

export default ExpenseInput;

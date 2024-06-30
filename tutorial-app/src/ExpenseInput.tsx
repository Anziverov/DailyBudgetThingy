import { useState } from "react";
import { Expense, Frequency } from "./ExpenseClass";

export interface ExpenseInputProps {
  expenses: Expense[] | null;
  setExpenses: (value: Expense[] | null) => void;
}

function ExpenseInput(expenseInputProps: ExpenseInputProps) {
  const { expenses, setExpenses } = expenseInputProps;
  const [expense, setExpense] = useState<Expense | null>(
    new Expense(0, "", 0, new Date(), false, null)
  );

  return (
    <>
      <input
        type="text"
        placeholder="Enter Expense Name"
        onChange={(e) => handleNameChange(e, setExpense, expense)}
        value={expense?.title || ""}
      />
      <label>Enter Expense</label>
      <input
        type="number"
        placeholder="Enter Expense"
        onChange={(e) => handleNumberChange(e, setExpense, expense)}
        value={expense?.amount || 0}
      />
      <label>Recurring?</label>
      <input
        type="checkbox"
        defaultChecked={expense?.recurring || false}
        onChange={(e) => handleFrequencyChange(e, setExpense, expense)}
      />
      {expense?.recurring && (
        <>
          <label>Frequency</label>
          <select
            onChange={(e) => handleFrequencySelect(e, setExpense, expense)}
          >
            <option value={Frequency.Daily}>Daily</option>
            <option value={Frequency.Weekly}>Weekly</option>
            <option value={Frequency.Monthly}>Monthly</option>
            <option value={Frequency.Yearly}>Yearly</option>
          </select>
        </>
      )}
      <label>Date</label>
      <input
        type="date"
        value={expense?.date ? expense.date.toISOString().split("T")[0] : ""}
        onChange={(e) => handleDateChange(e, setExpense, expense)}
      />
      <button onClick={() => handleSave(expenses, setExpenses, expense)}>
        Log Expense
      </button>
    </>
  );
}

function handleSave(
  expenses: Expense[] | null,
  setExpenses: (value: Expense[] | null) => void,
  expense: Expense | null
) {
  let newId = expenses
    ? Math.max(...expenses.map((expense) => expense.id)) + 1
    : 0;

  if (expense != null) {
    expense.id = newId;
  }

  setExpenses([
    ...(expenses ?? []),
    {
      ...expense,
    },
  ] as [Expense]);
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
      expense?.date || new Date(),
      expense?.recurring || null,
      expense?.frequency || null
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
      expense?.date || new Date(),
      expense?.recurring || null,
      expense?.frequency || null
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
      e.target.value ? new Date(e.target.value) : new Date(),
      expense?.recurring || null,
      expense?.frequency || null
    )
  );
}

function handleFrequencyChange(
  e: React.ChangeEvent<HTMLInputElement>,
  setExpense: (value: Expense | null) => void,
  expense: Expense | null
) {
  setExpense(
    new Expense(
      expense?.id || 0,
      expense?.title || "",
      expense?.amount || 0,
      expense?.date || new Date(),
      e.target.checked,
      !e.target.checked ? null : expense?.frequency || null
    )
  );
}

function handleFrequencySelect(
  e: React.ChangeEvent<HTMLSelectElement>,
  setExpense: (value: Expense | null) => void,
  expense: Expense | null
) {
  setExpense(
    new Expense(
      expense?.id || 0,
      expense?.title || "",
      expense?.amount || 0,
      expense?.date || new Date(),
      expense?.recurring || null,
      e.target.value as unknown as Frequency
    )
  );
}

export default ExpenseInput;

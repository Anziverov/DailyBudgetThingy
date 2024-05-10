import { Expense } from "./ExpenseClass";

export interface ExpenseDisplayProps {
  expenses: Expense[] | null;
}

function ExpenseDisplay(prop: ExpenseDisplayProps) {
  return (
    <>
      <ul>
        {prop.expenses?.map((expense) => (
          <li key={expense.id}>
            <h2>{expense.title}</h2>
            <p>{expense.amount}</p>
            <p>
              {expense.date ? expense.date.toISOString().split("T")[0] : ""}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
export default ExpenseDisplay;

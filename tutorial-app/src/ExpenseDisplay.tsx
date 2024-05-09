import { Expense } from "./ExpenseClass";

function ExpenseDisplay({ expenses }: { expenses: Expense[] | null }) {
  return (
    <>
      <ul>
        {expenses?.map((expense) => (
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

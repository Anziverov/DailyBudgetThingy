import ExpenseInput from "./ExpenseInput";
import ExpenseDisplay from "./ExpenseDisplay";
import { Expense } from "./ExpenseClass";

interface ExpenseSectionProps {
  expense: Expense[] | null;
  setExpense: (value: Expense[] | null) => void;
}

function ExpenseSection(props: ExpenseSectionProps) {
  const { expense, setExpense } = props;

  return (
    <>
      <ExpenseInput expenses={expense} setExpenses={setExpense} />
      <ExpenseDisplay expenses={expense} />
    </>
  );
}

export default ExpenseSection;

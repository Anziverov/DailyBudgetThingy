import { Expense } from "./ExpenseClass";
import MonthlyBudgetDisplay from "./MonthlyBudgetDisplay";
import MonthlyBudgetInput from "./MonthlyBudgetInput";
import { useState } from "react";

interface MonthlyBudgetSectionProps {
  income: number | null;
  expenses: Expense[] | null;
}

function MonthlyBudgetSection(props: MonthlyBudgetSectionProps) {
  const [month, setMonth] = useState<string>("");
  const { income, expenses } = props;
  return (
    <>
      <MonthlyBudgetInput setMonth={setMonth} />
      <MonthlyBudgetDisplay month={month} expenses={expenses} income={income} />
    </>
  );
}

export default MonthlyBudgetSection;

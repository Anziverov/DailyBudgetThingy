import { useState } from "react";

interface MonthlyBudgetInputProps {
  setMonth: (value: string) => void;
}

function MonthlyBudgetInput(props: MonthlyBudgetInputProps) {
  const { setMonth } = props;
  const [localMonth, setLocalMonth] = useState<string>("");
  return (
    <>
      <h2>Month</h2>
      <input
        type="month"
        value={localMonth}
        onChange={(x) => setLocalMonth(x.target.value)}
      />
      <button onClick={() => setMonth(localMonth)}>Log Month</button>
    </>
  );
}

export default MonthlyBudgetInput;

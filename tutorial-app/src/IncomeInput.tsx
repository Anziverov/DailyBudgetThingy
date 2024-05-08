import { useState } from "react";

function IncomeInput({
  setIncome,
}: {
  setIncome: (value: number | null) => void;
}) {
  const [localIncome, setLocalIncome] = useState<number | null>(null);

  return (
    <div>
      <h2>Monthly Income</h2>
      <input
        type="number"
        value={localIncome || ""}
        onChange={(e) =>
          setLocalIncome(e.target.value ? parseInt(e.target.value) : null)
        }
      />
      <button onClick={() => setIncome(localIncome ? localIncome : null)}>
        Log Income
      </button>
    </div>
  );
}

export default IncomeInput;

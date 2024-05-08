import IncomeInput from "./IncomeInput";
import IncomeDisplay from "./IncomeDisplay";
import { useState } from "react";

function IncomeSection() {
  const [income, setIncome] = useState<number | null>(null);

  return (
    <>
      <IncomeInput setIncome={setIncome} />
      <IncomeDisplay income={income} />
    </>
  );
}

export default IncomeSection;

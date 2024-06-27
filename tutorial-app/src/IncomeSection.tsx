import IncomeInput from "./IncomeInput";
import IncomeDisplay from "./IncomeDisplay";

interface IncomeSectionProps {
  income: number | null;
  setIncome: (value: number | null) => void;
}

function IncomeSection(props: IncomeSectionProps) {
  const { income, setIncome } = props;

  return (
    <>
      <IncomeInput setIncome={setIncome} />
      <IncomeDisplay income={income} />
    </>
  );
}

export default IncomeSection;

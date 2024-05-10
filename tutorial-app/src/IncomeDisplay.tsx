export interface IncomeDisplayProps {
  income: number | null;
}

function IncomeDisplay(props: IncomeDisplayProps) {
  const { income } = props;
  return (
    <>
      <h2>Income Monthly:{income}</h2>
    </>
  );
}

export default IncomeDisplay;

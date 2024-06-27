import { Expense, Frequency } from "./ExpenseClass";

export interface MonthlyBudgetDisplayProps {
  month: string;
  income: number | null;
  expenses: Expense[] | null;
}

function MonthlyBudgetDisplay(props: MonthlyBudgetDisplayProps) {
  const { month, income, expenses } = props;

  let currentMonth = new Date(month);
  let days = daysWithBudget(month, income ?? 0, expenses ?? null);

  return (
    <div>
      <h1>Monthly Budget</h1>
      <h2>{currentMonth.toLocaleString("default", { month: "long" })}</h2>
      {Array.from(days.entries()).map(([day, budget]) => (
        <div key={day}>
          <p>Day: {day}</p>
          <p>Budget: {budget}</p>
        </div>
      ))}
    </div>
  );
}

function daysInMonth(monthWithYear: string) {
  var date = new Date(monthWithYear);
  var year = date.getFullYear();
  var month = date.getMonth();
  return new Date(year, month + 1, 0).getDate();
}

function daysWithBudget(
  month: string,
  income: number,
  expenses: Expense[] | null
) {
  let daysNumber = daysInMonth(month);
  let recurringExpensesSum = 0;
  let currentExpenses: Expense[] = [];

  if (expenses !== null) {
    currentExpenses = expenses.filter((expense) => {
      return (
        expense.date != null &&
        getDateToString(expense.date) == month &&
        expense.recurring === null
      );
    });

    let recurringExpenses = expenses.filter((expense) => {
      return (
        expense.date != null &&
        isInRangeOfRightDate(expense.date, month) &&
        expense.recurring === true &&
        expense.frequency == Frequency.Monthly
      );
    });

    recurringExpensesSum = recurringExpenses.reduce(
      (acc, expense) => acc + (expense.amount ?? 0),
      0
    );
  }

  let dailyBudget = (income - recurringExpensesSum) / daysNumber;
  let days = new Map<number, number>();
  for (let i = 1; i <= daysNumber; i++) {
    let dayExpenses = currentExpenses.filter((expense) => {
      return expense.date != null && expense.date.getDate() === i;
    });
    let dayExpensesSum = dayExpenses.reduce(
      (acc, expense) => acc + (expense.amount ?? 0),
      0
    );

    let dayBalance = dailyBudget - dayExpensesSum;
    days.set(i, dayBalance);
  }

  return days;
}

function getDateToString(date: Date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  if (month < 10) {
    return year + "-0" + month;
  }
}

function isInRangeOfRightDate(leftDate: Date, rightString: string) {
  let rightDate = new Date(rightString);
  let leftYear = leftDate.getFullYear();
  let rightYear = rightDate.getFullYear();
  if (leftYear == rightYear) {
    return leftDate.getMonth() <= rightDate.getMonth();
  }
  return leftYear < rightYear;
}

export default MonthlyBudgetDisplay;

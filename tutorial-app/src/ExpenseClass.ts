export class Expense {
  id: number;
  title: string | null;
  amount: number | null;
  date: Date | null;

  constructor(id: number, title: string, amount: number, date: Date) {
    this.id = id;
    this.title = title;
    this.amount = amount;
    this.date = date;
  }
}

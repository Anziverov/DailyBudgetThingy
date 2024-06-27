export class Expense {
  id: number;
  title: string | null;
  amount: number | null;
  date: Date | null;
  recurring: boolean | null;
  frequency: Frequency | null;

  constructor(
    id: number,
    title: string | null,
    amount: number | null,
    date: Date | null,
    recurring: boolean | null,
    frequency: Frequency | null
  ) {
    this.id = id;
    this.title = title;
    this.amount = amount;
    this.date = date;
    this.recurring = recurring;
    this.frequency = frequency;
  }
}

export enum Frequency {
  Yearly,
  Monthly,
  Weekly,
  Daily,
}

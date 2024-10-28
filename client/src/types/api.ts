export interface Expense {
    _id?: string;
    name: string;
    amount: number;
    date?: Date;
    description?: string;
}
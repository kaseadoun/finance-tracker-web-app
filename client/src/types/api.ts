export interface Expense {
    _id?: string;
    name: string;
    amount: number;
    date?: Date;
    description?: string;
}

export interface Income {
    id?: string;
    name: string;
    amount: number;
    date?: Date;
    description?: string;
}
import { Expense } from "../../../types/api";

interface ExpenseItemProps {
    expense: Expense;
    deleteExpense: () => void;
}

export default function ExpenseItem({expense, deleteExpense}: ExpenseItemProps) {
    const { name, amount } = expense;

    return (
        <div>
            <h4>{name}</h4>
            <p>${amount}</p>
            <button className="bg-grey text-black">Update</button>
            <button onClick={deleteExpense} className="bg-red text-white">Delete</button>
        </div>
    );
}
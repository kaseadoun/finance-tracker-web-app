import { Expense } from "../../../types/api";

interface ExpenseItemProps {
    expense: Expense;
    deleteExpense: () => void;
    editExpense: () => void;
}

export default function ExpenseItem({expense, deleteExpense, editExpense}: ExpenseItemProps) {
    const { name, amount } = expense;

    return (
        <div>
            <h4>{name}</h4>
            <p>${amount}</p>
            <button onClick={editExpense} className="bg-grey text-black">Update</button>
            <button onClick={deleteExpense} className="bg-red text-white">Delete</button>
        </div>
    );
}
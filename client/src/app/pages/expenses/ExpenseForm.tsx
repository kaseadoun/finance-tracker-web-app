import { useState, useEffect } from "react";
import { Expense } from "../../../types/api";


interface AddExpenseProp {
    refreshExpenseList: () => void;
    isUpdating: boolean;
    expenseToUpdate: Expense | null;
    clearEdit: () => void;
    setIsUpdating: (isUpdating: boolean) => void;
}


export default function ExpenseAdd({ refreshExpenseList, isUpdating, expenseToUpdate, clearEdit, setIsUpdating }: AddExpenseProp) {
    const [expense, setExpense] = useState<Expense>({
        name: "",
        amount: 0
    });

    useEffect(() => {
        if (expenseToUpdate) {
            setExpense(expenseToUpdate);
        }
    }, [expenseToUpdate]);

    function resetForm() {
        setExpense({
            name: "",
            amount: 0
        });
        setIsUpdating(false);
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setExpense((prevExpense) => ({
            ...prevExpense,
            [name]: name === "amount" ? parseFloat(value) : value
        }));
    }

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const url = isUpdating ? `http://localhost:5050/expenses/${expense._id}` : "http://localhost:5050/expenses";
        const method = isUpdating ? "PATCH" : "POST";

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(expense)
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            refreshExpenseList();
            clearEdit();
        } catch (error) {
            console.error('A problem occurred adding or updating a record: ', error);
        } finally {
            resetForm();
        }
    }

    return (
        <div className="p-10">
            <form onSubmit={onSubmit} className="absolute">
                <>
                    <input
                        className="bg-white"
                        type="text"
                        placeholder="Expense Name"
                        name="name"
                        value={expense.name}
                        onChange={handleChange}
                    />
                    <input
                        className="bg-white"
                        type="number"
                        placeholder="Amount"
                        name="amount"
                        value={expense.amount}
                        onChange={handleChange}
                    />
                    <button className="bg-blue-500 text-white" type="submit">
                        { isUpdating ? "Update" : "Add Expense" }
                    </button>
                    <button type="button" onClick={ resetForm }>
                        { isUpdating ? "Cancel" : "Clear" }
                    </button>
                </>
            </form>
        </div>
    );
}
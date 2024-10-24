import { useState } from "react";
import { Expense } from "../../../types/api"; 


interface AddExpenseProp {
    refreshExpenseList: () => void;
}


export default function ExpenseAdd({ refreshExpenseList }: AddExpenseProp) {
    const [expense, setExpense] = useState<Expense>({
        name: "",
        amount: 0
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setExpense((prevExpense) => ({
            ...prevExpense,
            [name]: name === "amount" ? parseFloat(value) : value
        }));
    }

    async function onSubmit(e: any) {
        e.preventDefault();
        const item = { ...expense };

        try {
            let response = await fetch("http://localhost:5050/expenses", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(item)
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            refreshExpenseList();
        } catch (error) {
            console.error('A problem occurred adding or updating a record: ', error);
        } finally {
            setExpense({
                name: "",
                amount: 0
            })
        }
    }

    return (
        <div className="p-10">
            <form onSubmit={ onSubmit } className="absolute">
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
                    Add Expense
                </button>
            </form>
        </div>
    );
}
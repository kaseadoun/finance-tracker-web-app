import { useEffect, useState } from "react";
import ExpenseAdd from "./expenses/ExpenseAdd";

interface Expenses {
    name: string;
    amount: number;
}

export default function Dashboard() {
    const [expenses, setExpenses] = useState<Expenses[]>([]);

    useEffect(() => {
        async function getExpenses() {
            const response = await fetch('http://localhost:5050/expenses/');
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                console.error(message);
                return;
            }
            const listOfExpenses = await response.json();
            setExpenses(listOfExpenses);
        }
        getExpenses();
        return;
    }, [expenses.length]);

    function expenseList() {
        return expenses.map((expense) => {
            return(
                <div>
                    <h4>{ expense.name }</h4>
                    <p>${ expense.amount }</p>
                </div>
            );
        })
    }

    return(
        <section className="p-10">
            <ExpenseAdd />
            { expenseList() }
        </section>
    );
}
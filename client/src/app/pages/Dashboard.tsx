import { useEffect, useState } from "react";
import { Expense } from "../../types/api";
import ExpenseForm from "./expenses/ExpenseForm";
import ExpenseItem from "./expenses/ExpenseItem";

export default function Dashboard() {
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [isUpdating, setIsUpdating] = useState<boolean>(false);
    const [expenseToUpdate, setExpenseToUpdate] = useState<Expense | null>(null);

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

    useEffect(() => {
        getExpenses();
    }, []);

    async function deleteExpense(id: string) {
        try {
            const response = await fetch(`http://localhost:5050/expenses/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                console.error("Error deleting item.");
                return;
            }

            setExpenses(expenses.filter(expense => expense._id !== id));
        } catch(err) {
            console.error('Error deleting item: ', err);
        }
    }

    function editExpense(expense: Expense) {
        setExpenseToUpdate(expense);
        setIsUpdating(true);
    }

    function clearEdit() {
        setExpenseToUpdate(null);
        setIsUpdating(false);
    }

    function expenseList() {
        return expenses.map((expense) => {
            return (
                <ExpenseItem 
                    key={expense._id}
                    expense={expense}
                    deleteExpense={() => {
                        if (expense._id) {
                          deleteExpense(expense._id);
                        }
                      }}
                    editExpense={() => editExpense(expense)}
                />
            );
        })
    }

    return (
        <section className="p-10">
            <ExpenseForm 
                refreshExpenseList={getExpenses}
                isUpdating={isUpdating}
                expenseToUpdate={expenseToUpdate}
                clearEdit={clearEdit}
                setIsUpdating={setIsUpdating}
            />
            {expenseList()}
        </section>
    );
}
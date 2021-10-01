import axios from 'axios';

const EXPENSE_API_BASE_URL = "http://localhost:8090/api/Expense";

class ExpenseService {

    getExpenses(){
        return axios.get(EXPENSE_API_BASE_URL + '/getexpenses');
    }

    createExpense(expense){
        return axios.post(EXPENSE_API_BASE_URL+ '/addexpense',expense);
        
    }

    getExpenseById(expenseId){
        return axios.get(EXPENSE_API_BASE_URL + '/getexpenses/' + expenseId);
    }

    updateExpense(expense, expenseId){
        return axios.put(EXPENSE_API_BASE_URL + '/updateexpense/' + expenseId, expense);
    }

    deleteExpense(expenseId){
        return axios.delete(EXPENSE_API_BASE_URL + '/deleteexpense/' + expenseId);
    }
}

export default new ExpenseService()
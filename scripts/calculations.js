let expenseEntries = [
    ["groceries", 33],
    ["restaurants", 50],
    ["transport", 12],
    ["home", 70],
    ["subscriptions", 14],
    ["groceries", 28],
    ["subscriptions", 12]
];

let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "red";

function addExpenses(expenses){
    totalExpensesValue=0;
    for (let expense of expenses){
        totalExpensesValue+=expense[1];
        console.log(totalExpensesValue);
    }
    return totalExpensesValue;
}

function calculateAverageExpense(){
    if (expenseEntries.length === 0){
        return 0;
    } else {
    let averageExpense = addExpenses(expenseEntries) / expenseEntries.length;
    console.log("The average expenses are: " + averageExpense);
    return averageExpense;
    }
}

function calculateBalance(){
    addExpenses(expenseEntries);
    let balance = budgetValue - totalExpensesValue;
    console.log("The current balance is: "+ balance);
    return balance;
}

function updateBalanceColor(){
    const currentBalance = calculateBalance();
    if (currentBalance < 0){
        balanceColor = "red";
        console.log(`Balance color is: ${balanceColor}`);
        return balanceColor;
    }
    else if (budgetValue > currentBalance * 4){
        balanceColor = "orange";
        console.log(`Balance color is: ${balanceColor}`);
        return balanceColor;
    }
    else {
        balanceColor = "green";
        console.log(`Balance color is: ${balanceColor}`);
        return balanceColor;
    }
}
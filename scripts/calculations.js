let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];
let categoriesData = [
  ["groceries", 0],
  ["restaurants", 0],
  ["transport", 0],
  ["home", 0],
  ["subscriptions", 0]
];
let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "red";

function addExpenses() {
  totalExpensesValue = 0;
  for (let expense of expenseEntries) {
    totalExpensesValue += expense[1];
    console.log(totalExpensesValue);
  }
  return totalExpensesValue;
}

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  } else {
    let averageExpense = addExpenses() / expenseEntries.length;
    console.log("The average expenses are: " + averageExpense);
    return averageExpense;
  }
}

function calculateBalance() {
  addExpenses();
  let balance = budgetValue - totalExpensesValue;
  console.log("The current balance is: " + balance);
  return balance;
}

function updateBalanceColor() {
  const currentBalance = calculateBalance();
  if (currentBalance <= 0) {
    balanceColor = "red";
    console.log(`Balance color is: ${balanceColor}`);
    return balanceColor;
  } else if (budgetValue >= currentBalance * 4) {
    balanceColor = "orange";
    console.log(`Balance color is: ${balanceColor}`);
    return balanceColor;
  } else {
    balanceColor = "green";
    console.log(`Balance color is: ${balanceColor}`);
    return balanceColor;
  }
}

function calculateCategoryExpenses() {
    for (let i = 0; i < categoriesData.length; i++)
    {
        categoriesData[i][1]=0;
    }
  for (let expense of expenseEntries) {
    if (expense[0] === "groceries") {
      categoriesData[0][1] += expense[1];
    } else if (expense[0] === "restaurants") {
      categoriesData[1][1] += expense[1];
    } else if (expense[0] === "transport") {
      categoriesData[2][1] += expense[1];
    } else if (expense[0] === "home") {
      categoriesData[3][1] += expense[1];
    } else if (expense[0] === "subscriptions") {
      categoriesData[4][1] += expense[1];
    } else {
      console.log("REACHED HERE BY ERROR");
    }
  }
  return categoriesData;
}

function calculateLargestCategory(){
    let largestExpense = ["groceries",-1];
    for (let category of categoriesData){
        if (largestExpense[1] < category[1]){
            largestExpense[0] = category[0];
            largestExpense[1] = category[1];
        }
    }
    return largestExpense;
}

function addExpenseEntry(expense){
    if (expense[0] != "" && expense[1] > 0){
        expenseEntries.push(expense);
        addExpenses();
    } else {
        console.log("Invalid expense!");
    }
}
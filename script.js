// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// create an empty array
const collectEmployeeData = [];

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

let EmployeesBool = true

//create a while loop
  while(EmployeesBool) {

  

    let firstName = prompt("Enter first name:");
    let lastName = prompt("Enter last name");
    let salary = prompt("Enter salary");
   
    EmployeesBool = confirm("Do you wish to add another employee?")

let employees = {
    
  employeeFirstName: firstName,
  employeeLastName: lastName,
  employeeSalary: salary,

};

collectEmployeeData.push(employees)

  console.log(collectEmployeeData)

}

// retun the array of employees
return collectEmployeeData
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
}

// console.log(employeesArray);

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

function employeeDataArray(max) {
  return Math.floor(Math.random() * max);
}

console.log(employeeDataArray());
console.log(Math.random())

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
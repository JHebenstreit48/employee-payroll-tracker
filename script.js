// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// create an empty array
// const collectEmployeeData = [];

// Collect employee data
const collectEmployees = function () {
  const collectEmployeeData = [];
  // TODO: Get user input to create and return an array of employee objects

  let employeesBool = true

  //create a while loop
  while (employeesBool) {

    const firstName = prompt("Enter first name:");
    const lastName = prompt("Enter last name");
    let salaryString = prompt("Enter salary");

    if(isNaN(salaryString)) {
      salaryString = 0
    }

    const salary = parseFloat(salaryString)

    const employee = {

      firstName: firstName,
      lastName: lastName,
      salary: salary,

    };

    collectEmployeeData.push(employee)

    employeesBool = confirm("Do you wish to add another employee?")

  }

  // retun the array of employees
  return collectEmployeeData
}
// TODO: Calculate and display the average salary
// Display the average salary
function displayAverageSalary(employeesArray) {
  // How do I figure out the number of employees if employeesArray is an array

  const numberOfEmployees = employeesArray.length

  // How do I loop over employeesArray, access the salary in each object, total the salary, and divide by array.length
  let sum = 0

  for (let i = 0; i < numberOfEmployees; i++) {
    sum = sum + employeesArray[i].salary

  }

  const averageSalaryWithTwoDecimals = sum / numberOfEmployees

  console.log(`The average employee salary between our ${numberOfEmployees} employee(s) is $${averageSalaryWithTwoDecimals.toFixed(2)}`)

}

// Select a random employee
function getRandomEmployee (employeesArray) {
  // TODO: Select and display a random employee

  const randomNumber = Math.floor(Math.random() * employeesArray.length)

  const randomEmployee = employeesArray[randomNumber]

  
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`)

}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
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
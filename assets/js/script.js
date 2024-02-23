// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

const employeesArray = []


// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
    let  userFirstName = prompt("Enter employee's first name:", " ");
      while (/^[a-zA-Z-]+$/.test(userFirstName)===false){
        userFirstName = prompt("Please enter alphabets only")
      }
    
    let  userLastName = prompt("Enter employee's last name:");
      while (/^[a-zA-Z-]+$/.test(userFirstName)===false){
        userLastName = prompt("Please enter alphabets only")
      }

    let  userSalary = prompt("Enter your salary")
      while (isNaN(userSalary) || userSalary <0) {
        userSalary = prompt("Please enter a valid positive annual salary for the employee")
      }
      userSalary = parseInt(userSalary)

    employeeData = {
      firstName: userFirstName,
      lastName: userLastName,
      salary: userSalary
    }
  employeesArray.push(employeeData)
    
  addAnother = confirm("Add another?")
  while (addAnother) {
    collectEmployees();
  }
  return employeesArray
  
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let sum = 0;
  for (let i=0; i<employeesArray.length; i++) {
    sum += employeesArray[i].salary
  }

  const average = sum/employeesArray.length
  const roundDown = average.toFixed(2)
  
  console.log(`Average salary of employee between ${employeesArray.length} employee(s) are: $${roundDown}`)
  
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomEmployee=Math.floor(Math.random()* employeesArray.length)
  console.log(`Congratulations to ${employeesArray[randomEmployee].firstName} ${employeesArray[randomEmployee].lastName}, our random drawing winner!`);
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

let persons = [];
let salaries = [];

document.getElementById("nameInput").focus();

document.getElementById("addButton").addEventListener("click", addSalary);

function addSalary() {
  const nameInput = document.getElementById("nameInput");
  const salaryInput = document.getElementById("salaryInput");

  const name = nameInput.value.trim();
  const salary = salaryInput.value.trim();

  if (name === "" || !isNaN(name) || isNaN(salary) || salary < 0) {
      alert("Please enter a valid name and a non-negative numeric salary.");
      return;
  }

    persons.push(name);
    salaries.push(parseFloat(salary));

    nameInput.value = "";
    salaryInput.value = "";

    nameInput.focus();

    displaySalary();
    displayResults();
}

function displaySalary() {
    const table = document.getElementById("results_table");

    table.innerHTML = "<tr><th>Name</th><th>Salary</th></tr>";

    for (let i = 0; i < persons.length; i++) {
        const row = table.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = persons[i];
        cell2.textContent = salaries[i];
    }
}

function displayResults() {
    const averageSalary = calculateAverage(salaries);
    const highestSalary = findHighestSalary(salaries);

    document.getElementById("averageSalary").textContent = `$${averageSalary}`;
    document.getElementById("highestSalary").textContent = `$${highestSalary}`;
}

function calculateAverage(arr) {
    if (arr.length === 0) return 0;

    const total = arr.reduce((acc, curr) => acc + curr, 0);
    return (total / arr.length).toFixed(2);
}

function findHighestSalary(arr) {
    if (arr.length === 0) return 0;

    return Math.max(...arr).toFixed(2);
}




const employees = [
    {
        name: "Ali",
        salary: 5000,
        profession: "Developer"
    },
    {
        name: "Sara",
        salary: 8000,
        profession: "Manager"
    },
    {
        name: "Youssef",
        salary: 6500,
        profession: "Designer"
    }
];

let max = employees[0];

for (let i = 1; i < employees.length; i++) {

    if (employees[i].salary > max.salary) {
        max = employees[i];
    }

}

console.log("Name :", max.name);
console.log("Salary :", max.salary);
console.log("Profession :", max.profession);
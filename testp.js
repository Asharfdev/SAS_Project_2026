const people = [
    {
        firstName: "Hamza",
        lastName: "Boushaba",
        age: 25
    },
    {
        firstName: "Sara",
        lastName: "Alaoui",
        age: 22
    },
    {
        firstName: "Ahmed",
        lastName: "Boushaba",
        age: 30
    }
];

for (let i = 0; i < people.length; i++) {

    for (let j = i + 1; j < people.length; j++) {

        if (people[i].lastName === people[j].lastName) {

            console.log(people[i]);
            console.log(people[j]);
        }
    }
}
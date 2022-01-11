const friends = ["Alyssa", "Dianna", "Jack", "Maria", "Shila"];

for (let friend of friends) {
    console.log(friend);
}


let friend = {
    name: "Alyssa",
    age: 20,
    nationality: "English",
    lang: ["English", "Bangla"]
};

for (let key in friend) {
    console.log(friend[key]);
}

console.log(friend);
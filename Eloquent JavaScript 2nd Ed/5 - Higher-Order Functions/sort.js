var data = [
    {
        nome: "jose",
        idade: 24
    },
    {
        nome: "daniela",
        idade: 18
    },
    {
        nome: "vanda",
        idade: 40
    },
    {
        nome: "djalma",
        idade: 22
    },
    {
        nome: "isabelle",
        idade: 2
    }
]

// sort by age
console.log(data.sort(function(a, b){
    return a.idade - b.idade;
}));

// sort by name
console.log(data.sort(function(a, b){
    return a.name - b.name;
}));


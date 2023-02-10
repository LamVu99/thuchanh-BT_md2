const inventory = [

    {type:   "machine", value: 5000},


    {type:   "machine", value:  650},


    {type:      "duck", value:   10},


    {type: "furniture", value: 1200},


    {type:   "machine", value:   77}


]

let totalMachineValue = inventory.filter((element) => {
     return element.type === "machine";
});
let sum = 0
let total = totalMachineValue.reduce((a,b) => {
    return sum = a + b.value;
}, 0)
console.log(total)
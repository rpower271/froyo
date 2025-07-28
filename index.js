const flavors = [`vanilla`, `vanilla`, `vanilla`, `strawberry`, `coffee`, `coffee`];

console.log(flavors)

const count = {};

for (let index = 0; index < flavors.length; index++) {
  const element = flavors[index];

  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}
console.log(count);

function countOccurances(flavors, value) {
    return flavors.filter(element => {
        return element === value;
    }).length;
}
console.log(countOccurances(flavors,`vanilla`));
console.log(countOccurances(flavors,`coffee`));
console.log(countOccurances(flavors,`strawberry`));

// let flavors = ["vanilla", "vanilla", "vanilla", "strawberry", "coffee", "coffee"];
// let flavorCount = {};

// for (let flavor of flavors) {
//   if (flavorCount[flavor]) {
//     flavorCount[flavor] += 1;
//   } else {
//     flavorCount[flavor] = 1;
//   }
// }
// console.log(flavorCount);

prompt ("Enter froyo flavor",
    "vanilla, coffee, strawberry"
);





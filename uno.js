let test = {
  dog: "🐕 ",
  cat: "🐈 ",
  cow: "🐄 ",
};

console.log(test);
console.log(Object.keys(test));
console.log(Object.values(test));
console.log(Object.entries(test));
Object.assign(test, {
  dog: "🐕 ",
  cat: "🐈 ",
  cow: "🐄 ",
  turtle: "🐢 ",
});

console.log(test);
console.log(Object.keys(test));
console.log(Object.values(test));
console.log(Object.entries(test));
console.log(Object.getOwnPropertyNames(test));
console.log(Object.getOwnPropertySymbols(test));
console.log(Object.getOwnPropertyDescriptor(test, "dog"));
console.log(Object.getOwnPropertyDescriptor(test, "cow"));
console.log(Object.getOwnPropertyDescriptor(test, "turtle"));
console.log(Object.getOwnPropertyDescriptor(test, "cat"));

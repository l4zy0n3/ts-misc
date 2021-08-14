#!/usr/bin/env zx

let count = parseInt(await $`ls -1 | wc -l`);
console.log(`Files count: ${count}`);
let resp = await fetch("http://wttr.in");
if (resp.ok) {
  console.log(await resp.text());
}
let bear = await question("What kind of bear is best? ");
console.log(Object.keys(process.env));
let token = await question("Choose env variable: ", {
  choices: Object.keys(process.env),
});
console.log(`${token} is ${process.env[token]}`);

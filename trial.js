const person = {
    name2 : 'ali',
    age : 30
}
console.log(person.name2);
console.log(person);

const personUp = JSON.stringify(person)
console.log(personUp);

const personObj = JSON.parse(personUp)
console.log(personObj);

const fs = require('fs')
fs.writeFileSync('first.json',personUp)
console.log(fs.readFileSync('first.json').toString())
const player = {
    jersey: 1,
    name: 'rakib',
    team: 'BD',
    role: 'Allrounder'
}
const stringified = JSON.stringify(player);
console.log(stringified);

const objectified = JSON.parse(stringified);
console.log(objectified);
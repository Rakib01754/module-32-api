
function getData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => displayOnUi(users))
}

function displayOnUi(users) {
    users.map(person => {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <h3>Name : ${person.name}</h3>
        <p>Email: ${person.email}</p>
        <p>Userame: ${person.username}</p>`
        document.body.appendChild(newDiv);
    })

}
const getComment = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))
}
const displayComments = (comments) => {
    const commentArea = document.getElementById('comment-container')
    for (let comment of comments) {
        const newDiv = document.createElement('div')
        newDiv.innerHTML = `
        <h4>User Id : ${comment.id}</h4>
        <p>${comment.body}</p>
        <p>User Email : ${comment.email}</p>
        `
        commentArea.appendChild(newDiv)
    }
}

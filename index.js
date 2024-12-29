// Add your code here
document.addEventListener("DOMContentLoaded", submitData);

function submitData(name, email) {
    const inputObj = {
        name: name,
        email: email
    }
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(inputObj)
    })
    .then(res => res.json())
    .then(data => appendIdToDOM(data.id))
    .catch(error => appendErrorToDOM(error.message))
}

function appendIdToDOM(id) {
    const body = document.querySelector('body');
    const p = document.createElement('p');
    p.textContent = `New ID: ${id}`;
    body.appendChild(p);
  }
  
  function appendErrorToDOM(errorMessage) {
    const body = document.querySelector('body');
    const p = document.createElement('p');
    p.textContent = `Error: ${errorMessage}`;
    body.appendChild(p);
  }
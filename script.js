document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector("#usersTable")) {
        fetchUsers();
    }
    if (document.querySelector("#addUserForm")) {
        document.querySelector("#addUserForm").addEventListener("submit", addUser);
    }
    if (document.querySelector("#editUserForm")) {
        document.querySelector("#editUserForm").addEventListener("submit", editUser);
    }
});

// Fetch users and display in view.html
function fetchUsers() {
    fetch("https://cmps262-mod4.onrender.com/api/v1/users")
        .then(response => response.json())
        .then(users => {
            const tableBody = document.querySelector("#usersTable tbody");
            tableBody.innerHTML = "";
            users.forEach(user => {
                const row = `<tr><td>${user.name}</td><td>${user.email}</td></tr>`;
                tableBody.innerHTML += row;
            });
        });
}

// Add  a new user
function addUser(event) {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;

    fetch("https://cmps262-mod4.onrender.com/api/v1/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email })
    }).then(() => window.location.href = "view.html");
}

// Edit user 
function editUser(event) {
    event.preventDefault();
    const id = prompt("Enter User ID to Update:");
    const name = document.querySelector("#editName").value;
    const email = document.querySelector("#editEmail").value;

    fetch(`https://cmps262-mod4.onrender.com/api/v1/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email })
    }).then(() => window.location.href = "view.html");
}

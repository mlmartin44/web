const API_URL = "https://cmps262-mod4.onrender.com/api/v1/users";

export async function getUsers() {
    const response = await fetch(API_URL);
    return response.json();
}

export async function addUser(name, email) {
    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email })
    });
}

export async function updateUser(id, name, email) {
    await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email })
    });
}

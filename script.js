document.addEventListener('DOMContentLoaded', function() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const usersContainer = document.getElementById('users-container');
            users.forEach(user => {
                const userCard = document.createElement('div');
                userCard.classList.add('user-card');

                userCard.innerHTML = `
                    <h2>${user.name}</h2>
                    <p><strong>Username:</strong> ${user.username}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                    <p><strong>Company:</strong> ${user.company.name}</p>
                `;

                usersContainer.appendChild(userCard);
            });
        })
        .catch(error => console.error('Error fetching users:', error));
});
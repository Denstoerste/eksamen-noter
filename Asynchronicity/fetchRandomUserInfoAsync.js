// Select the button and the user info container
const button = document.querySelector('#fetchUser');
const userInfoDiv = document.querySelector('#userInfo');

// Function to fetch and display random user information
async function fetchUser() {
    try {
        // Display a loading message
        userInfoDiv.textContent = 'Loading...';

        // Fetch user data from the Random User API
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) {
            throw new Error('Failed to fetch user data.');
        }

        const data = await response.json();

        // Extract user information
        const user = data.results[0];
        const fullName = `${user.name.first} ${user.name.last}`;
        const email = user.email;
        const profilePicture = user.picture.large;

        // Display the user information
        userInfoDiv.innerHTML = `
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <img src="${profilePicture}" alt="Profile Picture">
    `;
    } catch (error) {
        // Handle errors gracefully
        userInfoDiv.textContent = 'Error fetching user information. Please try again.';
        console.error('Error:', error);
    }
}

// Add a click event listener to the button
button.addEventListener('click', fetchUser);

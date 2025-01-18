function renderUser(username, password) {
const outputDiv = document.querySelector('#output');
outputDiv.textContent = `username: ${username}, password: ${password}`;
}

renderUser(`mitusername`, `mitpassword`);

document.querySelector("#button").addEventListener('click', () => {
    console.log("button clicked");
});
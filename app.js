
    function fetchGitHubUser() {
            const username = document.getElementById("username").value.trim();
    const output = document.getElementById("output");

    if (!username) {
        output.innerHTML = `<p class="error">Please enter a username!</p>`;
    return;
            }

    // Reset output before fetching
    output.innerHTML = `<p>Loading...</p>`;

    fetch(`https://api.github.com/users/${username}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("User not found");
                    }
    return response.json();
                })
                .then((user) => {
        output.innerHTML = `
                        <div class="profile">
                            <img src="${user.avatar_url}" alt="Avatar">
                            <h2>${user.name || "No Name Available"}</h2>
                            <p id="bio">${user.bio || "No bio available"}</p>
                            <p><strong>Public Repositories:</strong> ${user.public_repos}</p>
                            <p><strong>Followers:</strong> ${user.followers}</p>
                        </div>
                    `;
                })
                .catch((error) => {
        output.innerHTML = `<p class="error">Error: ${error.message}</p>`;
                });
        }

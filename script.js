
document.getElementById('fetchRepo').addEventListener('click', function() {
    const repoName = document.getElementById('repoName').value;
    if (!repoName) {
        alert('Please enter a user ID');
        return;
    }

    fetchDemoData(repoName);
});

function fetchDemoData(repoName) {
    const url = `https://raw.githubusercontent.com/sanjid191/ajex-fetching/main/demoData.json`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            displayDemoData(data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            document.getElementById('repoData').innerText = 'Error fetching data';
        });
}

function displayDemoData(data) {
    const demoData = `
        <h2>${data.name}</h2>
        <p><strong>Username:</strong> ${data.username}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Address:</strong> ${data.address.street}, ${data.address.suite}, ${data.address.city}, ${data.address.zipcode}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Website:</strong> ${data.website}</p>
        <p><strong>Company:</strong> ${data.company.name}</p>
    `;

    document.getElementById('repoData').innerHTML = demoData;
}

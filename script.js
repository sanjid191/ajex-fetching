document.getElementById('fetchData').addEventListener('click', function() {
    fetchDemoData();
});

function fetchDemoData() {
    const url = 'https://raw.githubusercontent.com/sanjid191/ajex-fetching/main/demoData.json';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            document.getElementById('dataContainer').innerText = 'Error fetching data';
        });
}

function displayData(data) {
    const dataHTML = `
        <h2>${data.name}</h2>
        <p><strong>Username:</strong> ${data.username}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Address:</strong> ${data.address.street}, ${data.address.suite}, ${data.address.city}, ${data.address.zipcode}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Website:</strong> ${data.website}</p>
        <p><strong>Company:</strong> ${data.company.name}</p>
    `;

    document.getElementById('dataContainer').innerHTML = dataHTML;
}

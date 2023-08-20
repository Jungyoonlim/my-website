document.addEventListener('DOMContentLoaded', (event) => {
    const body = document.querySelector('body');
    const toggleButton = document.querySelector('#darkModeToggle');
    const contentContainer = document.querySelector('#contentContainer');

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('darkmode');
    });

    // Load dynamic content
    fetch('essays.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(essay => {
                const essayElement = document.createElement('div');
                essayElement.innerHTML = `
                    <h2>${essay.title}</h2>
                    <p>${essay.content}</p>
                `;
                contentContainer.appendChild(essayElement);
            });
        })
        .catch(error => console.error('Error:', error));
});

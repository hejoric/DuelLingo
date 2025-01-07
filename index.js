// Add an event listener to the button

document.querySelectorAll('.menu-button').forEach(button => {
    button.addEventListener('click', () => {
        const action = button.getAttribute('data-action');
        window.location.href = `${action}.html`;
    });
});
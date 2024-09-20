document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.car-item button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Carro comprado!');
        });
    });
});

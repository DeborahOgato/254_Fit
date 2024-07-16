document.addEventListener('DOMContentLoaded', () => {
    const signUpBtn = document.getElementById('signUpBtn');
    const signUpModal = document.getElementById('signUpModal');
    const closeModal = document.querySelector('.close');
    const googleFitCheckbox = document.getElementById('googleFit');
    const googleFitData = document.getElementById('googleFitData');

    signUpBtn.addEventListener('click', () => {
        signUpModal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        signUpModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == signUpModal) {
            signUpModal.style.display = 'none';
        }
    });

    googleFitCheckbox.addEventListener('change', () => {
        if (googleFitCheckbox.checked) {
            googleFitData.style.display = 'block';
        } else {
            googleFitData.style.display = 'none';
        }
    });
});

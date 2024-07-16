document.addEventListener('DOMContentLoaded', () => {
    const signUpBtn = document.getElementById('signUpBtn');
    const signUpModal = document.getElementById('signUpModal');
    const closeBtn = document.querySelector('.close');

    signUpBtn.addEventListener('click', () => {
        signUpModal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        signUpModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == signUpModal) {
            signUpModal.style.display = 'none';
        }
    });
});

// Get elements
const reportBtn = document.getElementById('reportBtn');
const popupOverlay = document.getElementById('popupOverlay');
const closePopup = document.getElementById('closePopup');

// Show popup
reportBtn.addEventListener('click', () => {
    popupOverlay.style.display = 'flex';
});

// Hide popup
closePopup.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
});

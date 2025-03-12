// Ini file javascript

// Function to validate form
function validateForm() {
    // Get value from input
    const nameInput = document.getElementById('name-input');

    // Check if input is empty
    if (nameInput.value == '') {
        alert('Name must be filled out');
    } else {
        // Write value to the page
    }
}

let bannerIndex = 0;
showBanner();

// Function to change banner
function nextBanner() {
    bannerIndex += 1;
    showBanner();
}

// Function to show banner
function showBanner() {
    // Get all banner elements
    const banners = document.getElementsByClassName('banner-img');

    if (bannerIndex >= banners.length) {
        bannerIndex = 0;
    }

    // Loop through all banner elements
    for (let i = 0; i < banners.length; i++) {
        banners[i].style.display = 'none';
    }

    // Show first banner
    banners[bannerIndex].style.display = 'block';
}

// Set interval to change banner
setInterval(nextBanner, 3000);
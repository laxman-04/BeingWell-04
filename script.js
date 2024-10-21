// JavaScript to Toggle Visibility of the About Us Section
document.addEventListener("DOMContentLoaded", function() {
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const aboutUsSection = document.getElementById('aboutUsSection');

 // Add click event listener to toggle the visibility of the "About Us" section
    learnMoreBtn.addEventListener('click', function() {
        if (aboutUsSection.style.display === 'none') {
            aboutUsSection.style.display = 'block'; // Show the section
            learnMoreBtn.textContent = 'Learn More About BeingWell'; // Change button text
        } else {
            aboutUsSection.style.display = 'none'; // Hide the section
            learnMoreBtn.textContent = 'Learn More About BeingWell'; // Revert button text
        }
    });
});

// Function to handle quiz logic
function startQuiz(quizType) {
    alert("Starting the " + quizType + " quiz...");
}

// Example of Search Functionality
document.getElementById('searchBar').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        alert('Searching for: ' + this.value);
    }
});






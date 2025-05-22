// Wait for the DOM to be fully loaded before running any JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const colorButton = document.getElementById('colorButton');
    
    // Array of background colors to cycle through
    const colors = ['#f0f0f0', '#ffebee', '#e8f5e9', '#e3f2fd', '#fff3e0'];
    let currentColorIndex = 0;

    colorButton.addEventListener('click', () => {
        // Get the next color and update the index
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        document.body.style.backgroundColor = colors[currentColorIndex];
    });

    console.log('Website loaded successfully!');
});
//your JS code here. If required.
// Get the h1 element inside the div with id 'sizeInfo'
const sizeInfo = document.querySelector('#sizeInfo h1');

// Function to update the size information
function updateSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    sizeInfo.textContent = `Width: ${width} and Height: ${height}`;
}

// Set up an event listener to detect window resize
window.addEventListener('resize', updateSize);

// Call the updateSize function initially to display the size on page load
updateSize();

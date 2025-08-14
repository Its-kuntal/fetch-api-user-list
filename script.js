// --- DOM Element References ---
// Get references to the HTML elements we'll be interacting with.
const userContainer = document.getElementById('user-container');
const reloadButton = document.getElementById('reload-button');
const statusContainer = document.getElementById('status-container');

// --- API Endpoint ---
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// --- Functions ---

/**
 * Displays a loading indicator to the user.
 */
function showLoadingState() {
    userContainer.innerHTML = ''; // Clear previous user data
    statusContainer.innerHTML = `
        <div class="flex justify-center items-center flex-col">
            <div class="spinner w-12 h-12 border-4 border-gray-200 rounded-full"></div>
            <p class="text-lg font-medium text-gray-600 mt-4">Loading Users...</p>
        </div>
    `;
}

/**
 * Displays an error message to the user.
 * @param {string} message - The error message to display.
 */
function showErrorState(message) {
    userContainer.innerHTML = ''; // Clear user data
    statusContainer.innerHTML = `
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative text-center" role="alert">
            <strong class="font-bold">Error:</strong>
            <span class="block sm:inline">${message}</span>
        </div>
    `;
}

/**
 * Fetches user data from the API and displays it on the page.
 */
async function fetchAndDisplayUsers() {
    // 1. Show a loading indicator while we fetch data.
    showLoadingState();

    try {
        // 2. Use the Fetch API to make a network request to the API URL.
        // The 'await' keyword pauses execution until the promise is resolved.
        const response = await fetch(apiUrl);

        // 3. Check if the response was successful (HTTP status 200-299).
        // If not, throw an error to be caught by the catch block.
        if (!response.ok) {
            throw new Error(`Network response was not ok. Status: ${response.status}`);
        }

        // 4. Parse the response body as JSON.
        // 'await' is used again because .json() also returns a promise.
        const users = await response.json();
        
        // 5. Clear the loading/status message.
        statusContainer.innerHTML = '';

        // 6. Loop through the array of user objects and create an HTML card for each.
        users.forEach(user => {
            // Create a new div element for the user card.
            const userCard = document.createElement('div');
            userCard.className = 'bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300';
            
            // Format the user's address into a readable string.
            const address = `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;

            // Populate the card with the user's data using template literals.
            userCard.innerHTML = `
                <h2 class="text-xl font-bold text-gray-900">${user.name}</h2>
                <p class="text-blue-500 mt-2 break-all">${user.email}</p>
                <div class="mt-4 pt-4 border-t border-gray-200">
                    <h3 class="text-sm font-semibold text-gray-500">Address</h3>
                    <p class="text-gray-700 text-sm">${address}</p>
                </div>
            `;

            // 7. Append the newly created card to the main user container.
            userContainer.appendChild(userCard);
        });

    } catch (error) {
        // 8. If any error occurs in the 'try' block, it will be caught here.
        console.error('Fetch error:', error); // Log the detailed error to the console for debugging.
        // Display a user-friendly error message on the page.
        showErrorState('Failed to fetch user data. Please check your internet connection and try again.');
    }
}

// --- Event Listeners ---

// Add a click event listener to the reload button.
// When clicked, it will call the fetchAndDisplayUsers function again.
reloadButton.addEventListener('click', fetchAndDisplayUsers);

// --- Initial Load ---

// Call the function once when the page loads to get the initial data.
fetchAndDisplayUsers();

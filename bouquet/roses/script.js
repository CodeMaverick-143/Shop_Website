// Function to fetch and render bouquets
async function fetchAndRenderBouquets() {
    try {
        const response = await fetch('bouquets.json'); // Fetch the JSON file
        const bouquets = await response.json(); // Parse the JSON

        renderBouquets(bouquets); // Render bouquets on the page
    } catch (error) {
        console.error('Error fetching bouquets:', error);
    }
}

// Function to render bouquets in the DOM
function renderBouquets(bouquets) {
    const container = document.getElementById('rose-container');
    container.innerHTML = ''; // Clear existing content

    bouquets.forEach(bouquet => {
        const card = document.createElement('div');
        card.className = 'bg-white shadow-lg rounded-lg p-6 lg:p-8'; // Increased padding for larger tabs

        const stockStatus = bouquet.inStock
            ? '<span class="text-green-600 font-bold">In Stock</span>'
            : '<span class="text-red-600 font-bold">Out of Stock</span>';

        card.innerHTML = `
            <img src="${bouquet.image}" alt="${bouquet.name}" class="w-full h-60 object-cover rounded-md mb-4"> <!-- Larger image -->
            <h4 class="text-xl font-bold text-green-700 mb-3">${bouquet.name}</h4> <!-- Larger font size -->
            <p class="text-gray-600 mb-4">${bouquet.description}</p>
            <p class="mt-4">${stockStatus}</p>
        `;

        container.appendChild(card);
    });
}

// Fetch and render bouquets when the page loads
fetchAndRenderBouquets();

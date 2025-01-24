// Function to fetch and render white flower bouquets
async function fetchAndRenderWhiteBouquets() {
    try {
        const response = await fetch('white_bouquets.json'); // Fetch the white flower bouquets JSON
        const bouquets = await response.json(); // Parse the JSON

        renderWhiteBouquets(bouquets); // Render the bouquets in the page
    } catch (error) {
        console.error('Error fetching white bouquets:', error);
    }
}

// Function to render white bouquets in the DOM
function renderWhiteBouquets(bouquets) {
    const container = document.getElementById('white-flower-container');
    container.innerHTML = ''; // Clear any existing content

    bouquets.forEach(bouquet => {
        const card = document.createElement('div');
        card.className = 'bg-white shadow-lg rounded-lg overflow-hidden';

        // Create HTML content for each bouquet
        card.innerHTML = `
            <img src="${bouquet.image}" alt="${bouquet.name}" class="w-full h-64 object-cover">
            <div class="p-4">
                <h4 class="font-bold text-lg">${bouquet.name}</h4>
                <p class="text-sm text-gray-700">${bouquet.description}</p>
                <p class="mt-2 text-sm font-medium ${bouquet.inStock ? 'text-green-500' : 'text-red-500'}">
                    ${bouquet.inStock ? 'In Stock' : 'Out of Stock'}
                </p>
            </div>
        `;
        
        container.appendChild(card); // Add the card to the container
    });
}

// Call the function to fetch and render the bouquets when the page is loaded
fetchAndRenderWhiteBouquets();

// Function to fetch and render mixed flower bouquets
async function fetchAndRenderMixedBouquets() {
    try {
        const response = await fetch('mixed_bouquets.json'); // Fetch the mixed flower bouquets JSON
        const bouquets = await response.json(); // Parse the JSON

        renderMixedBouquets(bouquets); // Render the bouquets in the page
    } catch (error) {
        console.error('Error fetching mixed bouquets:', error);
    }
}

// Function to render mixed bouquets in the DOM
function renderMixedBouquets(bouquets) {
    const container = document.getElementById('mixed-flower-container');
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
fetchAndRenderMixedBouquets();

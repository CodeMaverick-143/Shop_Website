document.addEventListener("DOMContentLoaded", () => {
    fetch("orchid_bouquets.json")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("orchid-container");
            data.forEach(bouquet => {
                const bouquetElement = document.createElement("div");
                bouquetElement.classList.add("bg-white", "rounded-lg", "overflow-hidden", "shadow-lg", "p-4", "transition-all", "hover:scale-105", "text-center");

                // Create image section
                const image = document.createElement("img");
                image.src = bouquet.image;
                image.alt = bouquet.name;
                image.classList.add("w-full", "h-64", "object-cover", "mb-4");

                // Create bouquet name
                const name = document.createElement("h4");
                name.classList.add("text-xl", "font-semibold", "text-green-700", "mb-2");
                name.textContent = bouquet.name;

                // Create description
                const description = document.createElement("p");
                description.classList.add("text-sm", "text-gray-600", "mb-4");
                description.textContent = bouquet.description;

                // Create stock status
                const stockStatus = document.createElement("p");
                stockStatus.classList.add("text-sm", "font-bold");
                stockStatus.textContent = bouquet.inStock ? "In Stock" : "Out of Stock";
                stockStatus.classList.add(bouquet.inStock ? "text-green-600" : "text-red-600");

                // Append all elements to the bouquet container
                bouquetElement.appendChild(image);
                bouquetElement.appendChild(name);
                bouquetElement.appendChild(description);
                bouquetElement.appendChild(stockStatus);

                // Append the new bouquet to the container
                container.appendChild(bouquetElement);
            });
        })
        .catch(error => {
            console.error("Error fetching the JSON data:", error);
        });
});

document.addEventListener("DOMContentLoaded", () => {
    fetch("car_decor.json")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("car-decor-container");
            data.forEach(garland => {
                const garlandElement = document.createElement("div");
                garlandElement.classList.add("bg-white", "rounded-lg", "overflow-hidden", "shadow-lg", "p-4", "transition-all", "hover:scale-105", "text-center");

                // Create image section
                const image = document.createElement("img");
                image.src = garland.image;
                image.alt = garland.name;
                image.classList.add("w-full", "h-64", "object-cover", "mb-4");

                // Create garland name
                const name = document.createElement("h4");
                name.classList.add("text-xl", "font-semibold", "text-green-700", "mb-2");
                name.textContent = garland.name;

                // Create stock status
                const stockStatus = document.createElement("p");
                stockStatus.classList.add("text-sm", "font-bold");
                stockStatus.textContent = garland.inStock ? "In Stock" : "Out of Stock";
                stockStatus.classList.add(garland.inStock ? "text-green-600" : "text-red-600");

                // Append all elements to the garland container
                garlandElement.appendChild(image);
                garlandElement.appendChild(name);
                garlandElement.appendChild(stockStatus);

                // Append the new garland to the container
                container.appendChild(garlandElement);
            });
        })
        .catch(error => {
            console.error("Error fetching the JSON data:", error);
        });
});

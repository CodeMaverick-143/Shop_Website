
  // Get the product link and dropdown
  const productsLink = document.getElementById('products-link');
  const productsDropdown = document.getElementById('products-dropdown');

  // Add click event to toggle the dropdown visibility
  productsLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    productsDropdown.classList.toggle('hidden');
  });

  // Close dropdown if clicked outside
  window.addEventListener('click', (e) => {
    if (!e.target.closest('.relative')) {
      productsDropdown.classList.add('hidden');
    }
  });

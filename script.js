document.addEventListener('DOMContentLoaded', () => {
    const offers = document.querySelectorAll('.offer');
    const totalPriceElement = document.getElementById('total-price');

    // Function to update the total price
    function updateTotalPrice() {
        const selectedOffer = document.querySelector('input[name="offer"]:checked');
        if (selectedOffer) {
            const price = selectedOffer.value;
            totalPriceElement.textContent = `$${price}.00 USD`;
        }
    }

    offers.forEach(offer => {
        const radioButton = offer.querySelector('input[type="radio"]');
        const options = offer.querySelector('.product-options');

        radioButton.addEventListener('change', () => {
            // Hide all product options
            document.querySelectorAll('.product-options').forEach(option => {
                option.classList.add('hidden');
            });
            // Show the selected offer's product options
            options.classList.remove('hidden');

            // Update total price
            updateTotalPrice();
        });
    });

    // Call the function initially to set the correct price and show the default selected options
    updateTotalPrice();
    const selectedOffer = document.querySelector('input[name="offer"]:checked');
    if (selectedOffer) {
        const options = selectedOffer.closest('.offer').querySelector('.product-options');
        if (options) {
            options.classList.remove('hidden');
        }
    }
});

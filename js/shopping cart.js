
document.addEventListener("DOMContentLoaded", function () {
    // Get all the product elements
    var productElements = document.querySelectorAll(".cart-product");

    // Function to update the subtotal
    function updateSubtotal() {
        var productElements = document.querySelectorAll(".cart-product");
        var updatedTotalPrice = 0;
        var updatedTotalItems = 0;

        // Recalculate subtotal
        productElements.forEach(function (productElement, index) {
            var priceElement = productElement.querySelector(".product-price");
            var quantityElement = productElement.querySelector("select");

            var priceText = priceElement.textContent.replace("₹", "").replace(/,/g, "");
            var price = parseFloat(priceText);
            var quantity = parseInt(quantityElement.value);

            var productTotal = price * quantity;
            updatedTotalPrice += productTotal;
            updatedTotalItems += quantity;
        });

        // Update the subtotal elements
        var subtotalElements = document.querySelectorAll(".subtotal");
        subtotalElements.forEach(function (subtotalElement, index) {
            subtotalElement.querySelector("#itemsCount").textContent = updatedTotalItems.toLocaleString();
            subtotalElement.querySelector("#total-price").textContent = "₹" + updatedTotalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        });

        // Update the Proceed to Buy subtotal
        var proceedSubtotal = document.querySelector(".proceedContainer .proceed-subtotal");
        proceedSubtotal.querySelector("#itemsCount").textContent = updatedTotalItems.toLocaleString();
        proceedSubtotal.querySelector("#total-price").textContent = "₹" + updatedTotalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    // Function to handle product deletion
    function deleteProduct(productElement) {
        if (confirm("Are you sure you want to delete this product?")) {
            // User confirmed the delete action
            productElement.remove(); // Remove the product element
            updateSubtotal(); // Recalculate the subtotal
        }
    }

    // Add event listeners to quantity <select> elements
    productElements.forEach(function (productElement, index) {
        var quantityElement = productElement.querySelector("select");

        quantityElement.addEventListener("change", function () {
            updateSubtotal();
        });

        var deleteIcon = productElement.querySelector("#del");

        deleteIcon.addEventListener("click", function () {
            deleteProduct(productElement);
        });
    });

    // Initial calculation of subtotal
    updateSubtotal();
});


document.addEventListener("DOMContentLoaded", function() {
    const decrementButtons = document.querySelectorAll(".decrement");
    const incrementButtons = document.querySelectorAll(".increment");
    const removeButtons = document.querySelectorAll(".remove");
    const likeButtons = document.querySelectorAll(".like");
    let totalPrice = 20; // Prix total initial

    // Fonction pour mettre à jour le prix total
    function updateTotalPrice() {
        document.getElementById("total-price").textContent = totalPrice.toFixed(2);
    }

    // Gestion des clics sur les boutons de décrementation
    decrementButtons.forEach(button => {
        button.addEventListener("click", function() {
            const item = this.parentElement;
            const quantityElement = item.querySelector(".quantity");
            let quantity = parseInt(quantityElement.textContent);

            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                totalPrice -= 10; // Prix par article
                updateTotalPrice();
            }
        });
    });

    // Gestion des clics sur les boutons d'incrementation
    incrementButtons.forEach(button => {
        button.addEventListener("click", function() {
            const item = this.parentElement;
            const quantityElement = item.querySelector(".quantity");
            let quantity = parseInt(quantityElement.textContent);

            quantity++;
            quantityElement.textContent = quantity;
            totalPrice += 10; // Prix par article
            updateTotalPrice();
        });
    });

    // Gestion des clics sur les boutons de suppression
    removeButtons.forEach(button => {
        button.addEventListener("click", function() {
            const item = this.parentElement;
            const quantity = parseInt(item.querySelector(".quantity").textContent);
            const pricePerItem = 10; // Prix par article
            totalPrice -= quantity * pricePerItem;
            item.remove();
            updateTotalPrice();
        });
    });

    // Gestion des clics sur les boutons "like"
    likeButtons.forEach(button => {
        button.addEventListener("click", function() {
            this.classList.toggle("liked");
        });
    });
});

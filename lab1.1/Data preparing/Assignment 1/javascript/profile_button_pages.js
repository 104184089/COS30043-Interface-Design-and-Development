document.addEventListener("DOMContentLoaded", function () {
    var Wallet_button = document.getElementById("Wallet_button");
    var History_button = document.getElementById("History_button");
    var Cart_button = document.getElementById("Cart_button");
    var profileContent = document.getElementById("profileContent");
    var historyContent = document.getElementById("historyContent");
    var walletContent = document.getElementById("walletContent");
    var cartContent = document.getElementById("cartContent");

    Wallet_button.addEventListener("click", function () {
        showTabContent(walletContent);
    });

    Cart_button.addEventListener("click", function () {
        showTabContent(cartContent);
    });

    History_button.addEventListener("click", function () {
        showTabContent(historyContent);
    });

    

    function showTabContent(content) {
        // Hide all content divs
        profileContent.style.display = "none";
        historyContent.style.display = "none";
        walletContent.style.display = "none";
        cartContent.style.display = "none";

        // Show the selected content div
        content.style.display = "block";
    }
});
const priceRangeInput = document.getElementById('priceRange');
const priceDisplay = document.getElementById('price_display');

priceRangeInput.addEventListener('input', function () {
    const selectedPrice = priceRangeInput.value;
    priceDisplay.textContent = `Selected Price: $${selectedPrice}`;
});

document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");



    var distanceFromBottom = document.body.scrollHeight - window.innerHeight - window.scrollY;

    // Show or hide the button based on scroll position
    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            if (distanceFromBottom > 200) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    // Scroll to the top when the button is clicked
    scrollToTopBtn.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});
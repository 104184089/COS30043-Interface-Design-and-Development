function login() {
    // After successful login, set loggedIn to true in localStorage
    localStorage.setItem('loggedIn', true);
    toggleNavigation();
}

// Function to handle logout
function logout() {
    localStorage.removeItem('loggedIn');
    toggleNavigation();
}

// Function to toggle navigation based on login status
function toggleNavigation() {
    const beforeLoginNav = document.getElementById('beforeLoginNav');
    const afterLoginNav = document.getElementById('afterLoginNav');

    // Pop up remind user sign in before add cars to Cart
    var signInToAdd = document.getElementsByClassName('sign_in_to_add');
    var topPopup = document.getElementById('top_popup')
    function showTopNoti(content) {
        topPopup.style.display = "none";
        content.style.display = "block";

        setTimeout(function () {
            content.style.display = 'none';
        }, 2000);
        
    }


    // Check if user is logged in
    const loggedIn = localStorage.getItem('loggedIn');

    if (loggedIn) {
        beforeLoginNav.style.display = 'none';
        afterLoginNav.style.display = 'flex';
    } else {
        beforeLoginNav.style.display = 'flex';
        afterLoginNav.style.display = 'none';

        // Set pop up remind user sign in before add cars to Cart
        Array.from(signInToAdd).forEach(function (button) {
            button.addEventListener('click', function () {
                showTopNoti(topPopup);
            });
        });
        
    }
}

// Call toggleNavigation when the page loads
toggleNavigation();
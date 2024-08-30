var filterForm = document.getElementById('filter_form');
var carList = document.getElementById('car_list');

// Add event listener to filter
filterForm.addEventListener('change', function () {
    var selectedFilter = document.querySelector('input[name="filter"]:checked').value;

    // Loop through each list item
    Array.from(carList.children).forEach(function (car) {
        var group = car.getAttribute('data-group');

        // Check if the item's group matches the selected filter or if the filter is "All"
        if (selectedFilter === 'All' || group === selectedFilter) {
            car.style.display = 'block';
        } else {
            car.style.display = 'none';
        }
    });
});
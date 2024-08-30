document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('background_video');
    var image = document.getElementById('background_image');
    var videoOverlay = document.querySelector('.video-overlay');

    videoOverlay.addEventListener('click', function () {
        videoOverlay.style.display = 'none'; // Overlay display none when user interact
        video.play();
    });

    video.addEventListener('ended', function () {
        var videoPosition = getPosition(video);
        video.style.display = 'none'; // Hide video when it done

        image.style.display = 'block'; // Display image
        image.classList.add('show');
        image.style.left = videoPosition.left + 'px';
        image.style.top = videoPosition.top + 'px';
    });

    function getPosition(element) {
        var rect = element.getBoundingClientRect();
        return {
            top: rect.top + window.scrollY,
            left: rect.left + window.scrollX
        };
    }
});

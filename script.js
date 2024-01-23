document.addEventListener('DOMContentLoaded', function() {
    // Event listener for the "Click to Enter" button
    var enterButton = document.getElementById('enterButton');
    var video = document.getElementById('loadingVideo');
    var loadingScreen = document.getElementById('loadingScreen');

    if (enterButton && video && loadingScreen) {
        enterButton.addEventListener('click', function() {
            // Unmute the video
            video.muted = false;

            // Show the video and play it
            video.style.display = 'block';
            video.play();

            // Change the loading screen background to black
            loadingScreen.style.background = 'black';

            // Hide the "Click to Enter" button
            this.style.display = 'none';
        });

        // Event listener for when the video ends
        video.addEventListener('ended', function() {
            // Transition to main content when the video ends
            loadingScreen.style.display = 'none';
            document.getElementById('mainContent').style.display = 'block';

            // Play the background music
            var backgroundMusic = document.getElementById('backgroundMusic');
            if (backgroundMusic) {
                backgroundMusic.play();
            }
        });
    } else {
        console.error('One or more elements are not found.');
    }

    // Event listener to toggle the pop-up menu
    var gameButton = document.getElementById('gameButton');
    var popupMenu = document.getElementById('popupMenu');

    function togglePopupMenu() {
        // This will toggle the display state of the pop-up menu
        if (popupMenu.style.display === 'block') {
            popupMenu.style.display = 'none';
        } else {
            popupMenu.style.display = 'block';
        }
    }

    if (gameButton && popupMenu) {
        gameButton.addEventListener('click', function(event) {
            // Prevents the click on the button from closing the menu
            event.stopPropagation();
            togglePopupMenu();
        });

        // Optional: Add a listener to the 'closeMenu' button if you have one
        var closeMenuButton = document.getElementById('closeMenu');
        if (closeMenuButton) {
            closeMenuButton.addEventListener('click', function() {
                popupMenu.style.display = 'none';
            });
        }
    } else {
        console.error('Game button or popup menu not found.');
    }

    // Click event listener for the document to close the pop-up menu if the click is outside
    document.addEventListener('click', function(event) {
        var isClickInsideMenu = popupMenu.contains(event.target);
        var isClickOnGameButton = gameButton && gameButton.contains(event.target);

        if (!isClickInsideMenu && !isClickOnGameButton && popupMenu.style.display === 'block') {
            popupMenu.style.display = 'none';
        }
    });
});

// Initially hide the video
document.getElementById('loadingVideo').style.display = 'none';

// Event listener for the "Click to Enter" button
document.getElementById('enterButton').addEventListener('click', function() {
    var video = document.getElementById('loadingVideo');

    // Unmute the video
    video.muted = false;

    // Show the video and play it
    video.style.display = 'block';
    video.play();

    // Hide the "Click to Enter" button
    this.style.display = 'none';
});

// Event listener for when the video ends
document.getElementById('loadingVideo').addEventListener('ended', function() {
    // Transition to main content when the video ends
    document.getElementById('loadingScreen').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
});

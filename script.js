const storyText = document.getElementById('story-text');

function makeChoice(choice) {
    if (choice === 1) {
        storyText.textContent = "You take the left path and discover a hidden treasure!";
    } else if (choice === 2) {
        storyText.textContent = "You take the right path and encounter a wild animal!";
    }
}

const storyText = document.getElementById('story-text');
const feedbackText = document.getElementById('feedback-text');

function makeChoice(choice) {
    // Animate out the current story content
    storyText.classList.add('hidden');
    feedbackText.classList.remove('visible');

    setTimeout(() => {
        if (choice === 1) {
            storyText.textContent = "You take the left path and find a magical talking bunny!";
            feedbackText.textContent = "The bunny gives you a golden key.";
            // Add more story options here if desired
        } else if (choice === 2) {
            storyText.textContent = "You take the right path and discover a hidden rainbow waterfall!";
            feedbackText.textContent = "You feel joyful and refreshed.";
            // Add more story options here if desired
        } else if (choice === 3) {
            storyText.textContent = "You sit and wait. Suddenly, a friendly dragon appears!";
            feedbackText.textContent = "The dragon invites you to fly with it.";
            // Add more story options here if desired
        }

        // Animate in the new story content and feedback
        storyText.classList.remove('hidden');
        feedbackText.classList.add('visible');
    }, 1000);
}

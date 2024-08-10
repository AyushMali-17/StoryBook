const storyText = document.getElementById('story-text');
const feedbackText = document.getElementById('feedback-text');

function makeChoice(choice) {
    // Fade out the current story content
    storyText.classList.add('hidden');
    feedbackText.classList.remove('visible');

    setTimeout(() => {
        if (choice === 1) {
            storyText.textContent = "You take the left path and discover a hidden treasure!";
            feedbackText.textContent = "You feel a sense of accomplishment.";
            // New option after finding treasure
            document.getElementById('choice4').style.display = 'block';
        } else if (choice === 2) {
            storyText.textContent = "You take the right path and encounter a wild animal!";
            feedbackText.textContent = "You manage to escape, but you are shaken.";
            document.getElementById('choice5').style.display = 'block';
        } else if (choice === 3) {
            storyText.textContent = "You sit and wait. Nothing happens.";
            feedbackText.textContent = "Patience is a virtue, but nothing ventured, nothing gained.";
            document.getElementById('choice6').style.display = 'block';
        } else if (choice === 4) {
            storyText.textContent = "You return to the crossroads, ready to choose again.";
            feedbackText.textContent = "Sometimes, it's wise to reconsider your options.";
            document.getElementById('choice1').style.display = 'block';
            document.getElementById('choice2').style.display = 'block';
        } else if (choice === 5) {
            storyText.textContent = "You explore the hidden cave and find ancient relics.";
            feedbackText.textContent = "You have uncovered secrets long forgotten.";
            document.getElementById('story-content').classList.add('hidden-cave');
        } else if (choice === 6) {
            storyText.textContent = "You climb the ancient tree and gain a new perspective on the forest.";
            feedbackText.textContent = "The view is breathtaking, and you feel enlightened.";
            document.getElementById('story-content').classList.add('ancient-tree');
        }

        // Fade in the new story content and feedback
        storyText.classList.remove('hidden');
        feedbackText.classList.add('visible');
    }, 1000);
}

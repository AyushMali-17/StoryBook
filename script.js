const storyText = document.getElementById('story-text');
const feedbackText = document.getElementById('feedback-text');
const buttonSound = document.getElementById('button-sound');
const transitionSound = document.getElementById('transition-sound');
const magicSound = document.getElementById('magic-sound');
const dragonSound = document.getElementById('dragon-sound');
const waterfallSound = document.getElementById('waterfall-sound');
const rainbowSound = document.getElementById('rainbow-sound');
const scoreSound = document.getElementById('score-sound');
const animationImage = document.getElementById('animation-image');
const profileBox = document.getElementById('profile');
const progressBar = document.getElementById('progress-bar');
const startScreen = document.getElementById('start-screen');
const storyContent = document.getElementById('story-content');
const choicesBox = document.getElementById('choices');
const animationBox = document.getElementById('animation-container');

let score = 0;
let progress = 0;

document.getElementById('start-story').addEventListener('click', () => {
    startScreen.classList.add('hidden');
    storyContent.classList.remove('hidden');
    choicesBox.classList.remove('hidden');
    profileBox.classList.remove('hidden');
    document.getElementById('profile-name').textContent = `Player: ${prompt('Enter your name:') || 'Kiddo'}`;
    document.getElementById('score').textContent = score;
    document.getElementById('progress-bar').style.width = `${progress}%`;
});

function makeChoice(choice) {
    buttonSound.play();
    storyText.classList.add('hidden');
    feedbackText.classList.remove('visible');

    setTimeout(() => {
        transitionSound.play();

        if (choice === 1) {
            storyText.textContent = "You take the left path and find a magical talking bunny!";
            feedbackText.textContent = "The bunny gives you a golden key.";
            document.getElementById('choice4').classList.remove('hidden');
            magicSound.play();
        } else if (choice === 2) {
            storyText.textContent = "You take the right path and discover a hidden rainbow waterfall!";
            feedbackText.textContent = "You feel joyful and refreshed.";
            document.getElementById('choice6').classList.remove('hidden');
            waterfallSound.play();
        } else if (choice === 3) {
            storyText.textContent = "You sit and wait. Suddenly, a friendly dragon appears!";
            feedbackText.textContent = "The dragon invites you to fly with it.";
            document.getElementById('choice5').classList.remove('hidden');
            dragonSound.play();
        } else if (choice === 4) {
            storyText.textContent = "The bunny leads you to a hidden treasure chest!";
            feedbackText.textContent = "You open it and find sparkling gems.";
            magicSound.play();
            animationImage.src = 'crystal-animation.gif';
        } else if (choice === 5) {
            storyText.textContent = "You fly with the dragon over the forest. The view is breathtaking!";
            feedbackText.textContent = "You feel a deep connection with nature.";
            dragonSound.play();
            animationImage.src = 'dragon-animation.gif';
        } else if (choice === 6) {
            storyText.textContent = "You explore the waterfall and find a secret cave behind it!";
            feedbackText.textContent = "Inside the cave, you discover a glowing crystal.";
            waterfallSound.play();
            magicSound.play();
            animationImage.src = 'crystal-animation.gif';
        } else if (choice === 7) {
            storyText.textContent = "You follow the rainbow and find a pot of gold at the end!";
            feedbackText.textContent = "The gold is yours to keep.";
            magicSound.play();
            rainbowSound.play();
            animationImage.src = 'pot-of-gold-animation.gif';
        } else if (choice === 8) {
            storyText.textContent = "You find a hidden treasure chest in the forest!";
            feedbackText.textContent = "Inside, you discover ancient magical artifacts.";
            magicSound.play();
            animationImage.src = 'hidden-treasure-animation.gif';
        } else if (choice === 9) {
            storyText.textContent = "You help a lost fairy find her way home!";
            feedbackText.textContent = "The fairy rewards you with a magical gift.";
            magicSound.play();
            animationImage.src = 'fairy-animation.gif';
        }

        // Update score and progress
        score += 10;
        progress = Math.min(progress + 10, 100); // Increment progress up to 100%
        document.getElementById('score').textContent = score;
        progressBar.style.width = `${progress}%`;

        // Show animation
        animationBox.classList.remove('hidden');

        // Animate in the new story content and feedback
        storyText.classList.remove('hidden');
        feedbackText.classList.add('visible');

        // Hide animation after 2 seconds
        setTimeout(() => {
            animationBox.classList.add('hidden');
        }, 2000);
    }, 1000);
}

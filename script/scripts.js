// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const memesContainer = document.getElementById('memes-container');
    const memesInner = document.querySelector('.memes-inner');
    const memes = document.querySelectorAll('.memes img');
    const mainElement = document.getElementById('main');
    const footer = document.getElementById('footer');

    let currentMemeIndex = 0;

    // Add event listener to each meme image
    memes.forEach((meme, index) => {
        meme.addEventListener('click', () => displayMeme(index));
    });

    function displayMeme(index) {
        // Set opacity for all images to 0.5
        memes.forEach((meme) => {
            meme.style.opacity = '0.5';
        });

        // Set opacity for selected image to 1
        memes[index].style.opacity = '1';

        // Dynamically set image source in main element
        mainElement.innerHTML = `<img src="${memes[index].src}" alt="Meme">`;

        currentMemeIndex = index;
    }

    // Display first meme by default
    displayMeme(0);

    // Add event listener to handle horizontal scroll
    memesContainer.addEventListener('scroll', function () {
        const scrollLeft = memesContainer.scrollLeft;
        const maxScrollLeft = memesInner.offsetWidth - memesContainer.offsetWidth;

        // If scrolled to the end, remove right arrow
        if (scrollLeft === maxScrollLeft) {
            // Remove right arrow
        } else {
            // Add right arrow
        }

        // If scrolled to the beginning, remove left arrow
        if (scrollLeft === 0) {
            // Remove left arrow
        } else {
            // Add left arrow
        }
    });

    // Add event listeners to navigate memes with keyboard arrows
    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft') {
            if (currentMemeIndex > 0) {
                displayMeme(currentMemeIndex - 1);
            }
        } else if (event.key === 'ArrowRight') {
            if (currentMemeIndex < memes.length - 1) {
                displayMeme(currentMemeIndex + 1);
            }
        }
    });
});

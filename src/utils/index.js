const initialItems = new Array(29_999_999).fill(0).map((_, i) => {
    return {
        id: i,
        isSelected: i === 29_999_998,
    }
});

function shuffle(array) {
    // Create a copy of the array to avoid mutating the original array
    let shuffledArray = array.slice();

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        // Generate a random index
        const j = Math.floor(Math.random() * (i + 1));
        // Swap the elements at index i and j
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
}

export { initialItems, shuffle }
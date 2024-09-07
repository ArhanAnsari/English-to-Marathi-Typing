// script.js

// Basic transliteration map from English to Marathi
const transliterationMap = {
    'a': 'अ', 'b': 'ब', 'c': 'क', 'd': 'द', 'e': 'ए', 'f': 'फ', 'g': 'ग',
    'h': 'ह', 'i': 'इ', 'j': 'ज', 'k': 'क', 'l': 'ल', 'm': 'म', 'n': 'न',
    'o': 'ओ', 'p': 'प', 'q': 'क', 'r': 'र', 's': 'स', 't': 'त', 'u': 'उ',
    'v': 'व', 'w': 'व', 'x': 'क्स', 'y': 'य', 'z': 'झ', ' ': ' ',
    // Add more mappings as necessary
};

// Function to transliterate from English to Marathi
function transliterateText(input) {
    let transliteratedText = '';
    for (let char of input.toLowerCase()) {
        transliteratedText += transliterationMap[char] || char; // Default to original character if no mapping is found
    }
    return transliteratedText;
}

// Event listener for input text area
document.getElementById('inputText').addEventListener('input', function () {
    const inputText = this.value;
    const words = inputText.split(' ');
    const lastWord = words[words.length - 2]; // Get the word before the latest space

    if (inputText.endsWith(' ') && lastWord) {
        const transliteratedWord = transliterateText(lastWord);
        words[words.length - 2] = transliteratedWord; // Replace English word with Marathi transliteration
        document.getElementById('outputText').value = words.join(' ');
    } else {
        document.getElementById('outputText').value = transliterateText(inputText);
    }
});

// Clear button functionality
document.getElementById('clearBtn').addEventListener('click', function () {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
});

// Copy button functionality
document.getElementById('copyBtn').addEventListener('click', function () {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Translated text copied to clipboard!');
});

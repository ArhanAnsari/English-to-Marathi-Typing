// script.js

// Function to transliterate from English to Marathi
function transliterateText(input) {
    return IndicTransliterator.transliterate(input, "english", "marathi");
}

// Event listener to detect typing
document.getElementById('inputText').addEventListener('input', function () {
    const inputText = this.value;
    const words = inputText.split(' ');
    const lastWord = words[words.length - 2]; // Get the word before the latest space

    if (inputText.endsWith(' ') && lastWord) {
        const transliteratedWord = transliterateText(lastWord);
        words[words.length - 2] = transliteratedWord; // Replace English word with Marathi transliteration
        document.getElementById('outputText').value = words.join(' ');
    } else {
        document.getElementById('outputText').value = inputText;
    }
});

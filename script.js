// Expanded transliteration map for complex Marathi phonetic rules
const transliterationMap = {
    'a': 'अ', 'aa': 'आ', 'i': 'इ', 'ii': 'ई', 'u': 'उ', 'uu': 'ऊ',
    'e': 'ए', 'ai': 'ऐ', 'o': 'ओ', 'au': 'औ', 'am': 'अं', 'ah': 'अः',
    'ka': 'क', 'kha': 'ख', 'ga': 'ग', 'gha': 'घ', 'nga': 'ङ',
    'cha': 'च', 'chha': 'छ', 'ja': 'ज', 'jha': 'झ', 'nya': 'ञ',
    'ta': 'ट', 'tha': 'ठ', 'da': 'ड', 'dha': 'ढ', 'na': 'ण',
    'pa': 'प', 'pha': 'फ', 'fa': 'फ', 'ba': 'ब', 'bha': 'भ', 'ma': 'म',
    'ya': 'य', 'ra': 'र', 'la': 'ल', 'va': 'व', 'wa': 'व', 
    'sha': 'श', 'ssa': 'ष', 'sa': 'स', 'ha': 'ह', 'ksha': 'क्ष', 
    'tra': 'त्र', 'gya': 'ज्ञ', 'ri': 'ऋ', 'li': 'ऌ', 'lu': 'ॡ',
    'ji': 'जी', 'jo': 'जो', 'sha': 'श', 'ch': 'च', 'dh': 'ध', 
    'th': 'थ', 'dya': 'द्य', 'kri': 'कृ', 'dri': 'दृ', 'gra': 'ग्र',
    'sti': 'स्ति', 'sma': 'स्म', 'bha': 'भा', 'ni': 'नि', 'li': 'लि',
    'chi': 'चि', 'kti': 'क्ति', 'ja': 'ज', 'ji': 'जी', 'gu': 'गु',
    'ge': 'गे', 'ra': 'रा', 'ni': 'नी', 'ne': 'ने', ' ' : ' ', 
    ',': '।', '.': '।'
    // Further expand with more combinations as needed
};

// Sample dictionary for autocomplete
const marathiDictionary = {
    'namaskar': ['नमस्कार'],
    'mumbai': ['मुंबई'],
    'pune': ['पुणे'],
    'maharashtra': ['महाराष्ट्र'],
    'shikshan': ['शिक्षण'],
    'vidyarthi': ['विद्यार्थी'],
    'vidyalaya': ['विद्यालय'],
    'shala': ['शाळा'],
    'praarthana': ['प्रार्थना'],
    'ghar': ['घर'],
    'aapan': ['आपण'],
    'aai': ['आई'],
    'baba': ['बाबा'],
    'mitra': ['मित्र'],
    'kahi': ['काही'],
    'divas': ['दिवस'],
    'sakhar': ['साखर'],
    'dukan': ['दुकान'],
    'majha': ['माझा'],
    'tu': ['तू'],
    'tumhi': ['तुम्ही'],
    'tyacha': ['त्याचा'],
    'tyanchi': ['त्यांची'],
    'tya': ['त्या'],
    'he': ['हे'],
    'aamhi': ['आम्ही'],
    'apan': ['आपण'],
    'kon': ['कोण'],
    'kuth': ['कुठे'],
    'kasa': ['कसा'],
    // Continue adding more common words and their Marathi translations...
};

// Function for Transliteration
function transliterateText(input) {
    const words = input.split(' ');
    let transliteratedText = '';

    words.forEach(word => {
        let transliteratedWord = '';
        let tempWord = '';

        // Check dictionary first for common word matches
        if (marathiDictionary[word.toLowerCase()]) {
            transliteratedWord = marathiDictionary[word.toLowerCase()][0];
        } else {
            for (let i = 0; i < word.length; i++) {
                tempWord += word[i].toLowerCase();

                if (transliterationMap[tempWord]) {
                    transliteratedWord += transliterationMap[tempWord];
                    tempWord = '';  // Reset tempWord to start fresh
                }
            }

            // Append any remaining characters that couldn't be transliterated
            transliteratedWord += tempWord;
        }

        transliteratedText += transliteratedWord + ' ';
    });

    return transliteratedText.trim();
}

// Function for Autocomplete suggestions
function suggestAutocomplete(input) {
    const suggestions = Object.keys(marathiDictionary)
        .filter(word => word.startsWith(input.toLowerCase()))
        .map(word => marathiDictionary[word])
        .flat();
    showSuggestions(suggestions);
}

// Event listener for input text area with autocomplete
let debounceTimeout;
document.getElementById('inputText').addEventListener('input', function () {
    clearTimeout(debounceTimeout); // Clear the timeout for debouncing
    const inputText = this.value.trim();
    const outputArea = document.getElementById('outputText');

    debounceTimeout = setTimeout(() => {
        outputArea.value = transliterateText(inputText);
        const currentWord = inputText.split(' ').pop();
        suggestAutocomplete(currentWord);
    }, 300); // Set a delay of 300ms
});

// Show suggestions dynamically
function showSuggestions(suggestions) {
    const suggestionBox = document.getElementById('suggestions');
    suggestionBox.innerHTML = ''; // Clear previous suggestions

    suggestions.forEach(suggestion => {
        const item = document.createElement('div');
        item.className = 'suggestion-item';
        item.textContent = suggestion;
        item.onclick = () => selectSuggestion(suggestion);
        suggestionBox.appendChild(item);
    });
}

// Handle selecting a suggestion
function selectSuggestion(suggestion) {
    const inputText = document.getElementById('inputText');
    const words = inputText.value.trim().split(' ');
    words.pop();
    words.push(suggestion);
    inputText.value = words.join(' ') + ' ';
    document.getElementById('suggestions').innerHTML = '';
}

// Clear button functionality
document.getElementById('clearBtn').addEventListener('click', function () {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
    document.getElementById('suggestions').innerHTML = '';
});

// Copy button functionality
document.getElementById('copyBtn').addEventListener('click', function () {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Text copied to clipboard!');
});

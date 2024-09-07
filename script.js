// Expanded transliteration map with more phonetic rules
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
    'ti': 'ति', 'to': 'तो', 'tu': 'तु', 'shi': 'शि', 'sho': 'शो',
    'chu': 'चु', 'chu': 'छु', 'dhi': 'धि', 'dha': 'धा', 'tha': 'था',
    'dya': 'द्या', 'gra': 'ग्र', 'stri': 'स्त्री', 'bha': 'भा',
    'li': 'ली', 'chi': 'ची', 'kti': 'क्ति', 'jai': 'जै', 'shu': 'शु',
    'chu': 'चू', 'na': 'ना', 'sha': 'षा', 'cha': 'चा', 'ne': 'ने', 
    'kri': 'कृ', 'dri': 'दृ', 'shi': 'शि', 'ti': 'ति', 'mi': 'मि',
    'jha': 'झा', 'pi': 'पि', 'pa': 'पा', 'la': 'ला', 'pu': 'पु',
    'ka': 'का', 'ko': 'को', 'no': 'नो', 'ha': 'हा', 'chi': 'चि',
    'bha': 'भा', 'phu': 'फु', 'mha': 'म्हा', 'mi': 'मी', 'bha': 'भा',
    'va': 'वा', 'vi': 'वि', 'sha': 'ष', 'aai': 'आई', 'baba': 'बाबा',
    'shiksha': 'शिक्षा', 'vidya': 'विद्या', 'mitra': 'मित्र', 'divas': 'दिवस',
    'namaskar': 'नमस्कार', 'aamhi': 'आम्ही', 'aapan': 'आपण', 'pan': 'पण',
    'acha': 'अच्छा', 'navin': 'नवीन', 'shabd': 'शब्द', 'shabdakosh': 'शब्दकोश',
    'vidyarthi': 'विद्यार्थी', 'vidyalaya': 'विद्यालय', 'shala': 'शाळा',
    'prarthana': 'प्रार्थना', 'ghara': 'घर', 'tu': 'तू', 'tumhi': 'तुम्ही',
    'tyacha': 'त्याचा', 'tyanchi': 'त्यांची', 'tya': 'त्या', 'he': 'हे',
    ',': '।', '.': '।'
    // Expand with more phonetic rules as needed
};

// Expanded dictionary with more words for autocomplete suggestions
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
    'navin': ['नवीन'],
    'mulga': ['मुलगा'],
    'mulgich': ['मुलगी'],
    'prashna': ['प्रश्न'],
    'uttar': ['उत्तर'],
    'shahar': ['शहर'],
    'gruh': ['गृह'],
    'balak': ['बालक'],
    'chitr': ['चित्र'],
    'vyakti': ['व्यक्ती'],
    'ghatna': ['घटना'],
    'prakash': ['प्रकाश'],
    'shant': ['शांत'],
    'vishwa': ['विश्व'],
    'vidya': ['विद्या'],
    'shiksha': ['शिक्षा'],
    'utsav': ['उत्सव'],
    'jag': ['जग'],
    'granth': ['ग्रंथ'],
    'sansar': ['संसर'],
    'prakruti': ['प्रकृती'],
    'videshi': ['विदेशी'],
    'bhavishya': ['भविष्य'],
    'vichar': ['विचार'],
    'shodh': ['शोध'],
    'kal': ['काल'],
    'karya': ['कार्य'],
    'vyavahar': ['व्यवहार'],
    'swayam': ['स्वयं'],
    'nirnay': ['निर्णय'],
    'samarth': ['समर्थ'],
    'shraddha': ['श्रद्धा'],
    'maitr': ['मैत्र'],
    'dnyan': ['ज्ञान'],
    'anubhav': ['अनुभव'],
    'shakti': ['शक्ती'],
    'sankalp': ['संकल्प'],
    'samyak': ['सम्यक'],
    'shrusti': ['सृष्टी'],
    'vividha': ['विविध'],
    'sanket': ['संकेत'],
    'samarthya': ['समर्थ्य'],
    'yash': ['यश'],
    'manasik': ['मानसिक'],
    'prayas': ['प्रयास'],
    'shrama': ['श्रम'],
    'safalta': ['सफलता'],
    'yogdan': ['योगदान'],
    'jagatik': ['जागतिक'],
    'prachin': ['प्राचीन'],
    'adhunik': ['आधुनिक'],
    'sanskrut': ['संस्कृत'],
    'vidnyan': ['विज्ञान'],
    'sahitya': ['साहित्य'],
    'samaj': ['समाज'],
    'vyavahar': ['व्यवहार'],
    // Continue expanding with more common words and their Marathi translations...
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

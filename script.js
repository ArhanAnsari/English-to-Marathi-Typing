document.getElementById('translateButton').addEventListener('click', async () => {
    const inputText = document.getElementById('inputText').value;
    const outputTextArea = document.getElementById('outputText');
  
    if (inputText.trim() === '') {
      outputTextArea.value = 'Please enter text to translate.';
      return;
    }
  
    try {
      const response = await fetch('https://libretranslate.de/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          q: inputText,
          source: 'en',
          target: 'mr',
          format: 'text'
        })
      });
  
      if (!response.ok) {
        throw new Error('Translation failed');
      }
  
      const data = await response.json();
      outputTextArea.value = data.translatedText;
    } catch (error) {
      outputTextArea.value = 'Error: ' + error.message;
    }
  });
async function loadCafeNote() {
    const quoteElement = document.getElementById('quote-text');
    
    try {
        // Asynchronously load text data using Fetch API
        const response = await fetch('specials.txt');
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const text = await response.text();
        
        // Split text by lines and pick a random note
        const notes = text.split('\n').filter(line => line.trim() !== '');
        const randomIndex = Math.floor(Math.random() * notes.length);
        
        // Update DOM
        quoteElement.innerText = notes[randomIndex];
    } catch (error) {
        quoteElement.innerText = "Couldn't load cafe note today!";
        console.error('Fetch error:', error);
    }
}

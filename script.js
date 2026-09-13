async function loadCafeNote() {
    const quoteElement = document.getElementById('quote-text');
    
    try {
        const response = await fetch('specials.txt');
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const text = await response.text();
        
        // Split text lines and join them with line breaks
        const notes = text.split('\n').filter(line => line.trim() !== '');
        quoteElement.innerHTML = notes.join('<br><br>');
        
    } catch (error) {
        quoteElement.innerText = "Couldn't load cafe notes!";
        console.error('Fetch error:', error);
    }
}
        
     

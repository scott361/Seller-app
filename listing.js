async function processImage(event) {
    const file = event.target.files[0];
    const preview = document.getElementById('preview');
    
    // 1. Show original preview
    preview.src = URL.createObjectURL(file);

    // 2. Call AI API to change background to white
    // Note: You need a real API key for this to work
    const formData = new FormData();
    formData.append('image_file', file);
    formData.append('bg_color', 'white');

    const response = await fetch('https://api.remove.bg', {
        method: 'POST',
        headers: { 'X-Api-Key': 'YOUR_API_KEY' },
        body: formData
    });

    if (response.ok) {
        const blob = await response.blob();
        preview.src = URL.createObjectURL(blob); // Updates to white background image
    }
}
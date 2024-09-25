document.addEventListener('DOMContentLoaded', () => {
    // Image data with local image paths
    const images = [
        // landscape
        { src: 'images/image1.jpg', category: 'landscape' },
        { src: 'images/image2.jpg', category: 'landscape' },
        { src: 'images/image3.jpg', category: 'landscape' },
        { src: 'images/image4.jpg', category: 'landscape' },
        
        // portrait
        { src: 'images/image5.jpg', category: 'portrait' },
        { src: 'images/image6.jpg', category: 'portrait' },
        { src: 'images/image7.jpg', category: 'portrait' },
        { src: 'images/image8.jpg', category: 'portrait' },
        
        // still-life
        { src: 'images/image9.jpg', category: 'still-life' },
        { src: 'images/image10.jpg', category: 'still-life' },
        { src: 'images/image11.jpg', category: 'still-life' },
        { src: 'images/image12.jpg', category: 'still-life' },
    ];

    // Select elements
    const filterSelect = document.getElementById('filter-select');
    const gallery = document.querySelector('.gallery');

    // Function to generate images
    function generateImages(images) {
        images.forEach((image) => {
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.category;
            gallery.appendChild(img);
        });
    }

    // Function to filter images
    function filterImages(category) {
        const images = gallery.children;
        Array.from(images).forEach((img) => {
            if (category === 'all' || img.alt === category) {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        });
    }

    // Event listener for filter select
    filterSelect.addEventListener('change', (e) => {
        const category = e.target.value;
        filterImages(category);
    });

    // Generate images on page load
    generateImages(images);
});

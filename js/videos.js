// Video data
const videos = [
    {
        id: 1,
        title: "Pokémon TCG Pocket - Official Trailer",
        thumbnail: "https://img.youtube.com/vi/PUwu573uelA/maxresdefault.jpg",
        category: "gameplay",
        url: "https://www.youtube.com/watch?v=PUwu573uelA",
        description: "Explore the new Pokémon card game experience"
    },
    {
        id: 2,
        title: "Pokémon TCG Pocket - Gameplay Introduction",
        thumbnail: "https://img.youtube.com/vi/lJu_AlaCQ0E/maxresdefault.jpg",
        category: "tutorial",
        url: "https://www.youtube.com/watch?v=lJu_AlaCQ0E",
        description: "Learn game rules and basic operations"
    },
    {
        id: 3,
        title: "Pokémon TCG Pocket - Card Collection Guide",
        thumbnail: "https://img.youtube.com/vi/pM9A8Hl9NUU/maxresdefault.jpg",
        category: "strategy",
        url: "https://www.youtube.com/watch?v=pM9A8Hl9NUU",
        description: "Learn efficient card collection strategies"
    },
    {
        id: 4,
        title: "Pokémon TCG Pocket - Battle Tips",
        thumbnail: "https://img.youtube.com/vi/buGp08Em3dU/maxresdefault.jpg",
        category: "strategy",
        url: "https://www.youtube.com/watch?v=buGp08Em3dU",
        description: "Master advanced battle techniques"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const videoGrid = document.getElementById('videoGrid');
    const categoryButtons = document.querySelectorAll('.category-buttons button');

    // Render videos
    function renderVideos(filteredVideos) {
        videoGrid.innerHTML = '';
        filteredVideos.forEach(video => {
            const videoElement = document.createElement('div');
            videoElement.className = 'video-card';
            videoElement.innerHTML = `
                <div class="video-thumbnail">
                    <img src="${video.thumbnail}" alt="${video.title}" loading="lazy">
                </div>
                <div class="video-info">
                    <h3>${video.title}</h3>
                    <p>${video.description}</p>
                    <a href="${video.url}" class="watch-button" target="_blank" rel="noopener noreferrer">
                        Watch Video
                    </a>
                </div>
            `;
            videoGrid.appendChild(videoElement);
        });
    }

    // Category filtering
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            
            // Update button states
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter videos
            const filteredVideos = category === 'all' 
                ? videos 
                : videos.filter(video => video.category === category);

            renderVideos(filteredVideos);
        });
    });

    // Initial render
    renderVideos(videos);
});
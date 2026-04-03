// Sample movie data
const movies = [
    {
        id: 1,
        title: "The Matrix",
        year: 1999,
        rating: "8.7/10",
        emoji: "🤖",
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" // Sample video
    },
    {
        id: 2,
        title: "Inception",
        year: 2010,
        rating: "8.8/10",
        emoji: "💭",
        description: "A skilled thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 3,
        title: "The Dark Knight",
        year: 2008,
        rating: "9.0/10",
        emoji: "🦇",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 4,
        title: "Interstellar",
        year: 2014,
        rating: "8.6/10",
        emoji: "🚀",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 5,
        title: "Pulp Fiction",
        year: 1994,
        rating: "8.9/10",
        emoji: "🔫",
        description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 6,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: "9.3/10",
        emoji: "⛓️",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    }
];

// DOM Elements
const moviesGrid = document.getElementById('moviesGrid');
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('movieModal');
const closeBtn = document.querySelector('.close');
const playBtn = document.getElementById('playBtn');
const downloadBtn = document.getElementById('downloadBtn');
const moviePlayer = document.getElementById('moviePlayer');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    displayMovies(movies);
    setupEventListeners();
});

// Display movies on grid
function displayMovies(moviesToDisplay) {
    moviesGrid.innerHTML = '';
    
    moviesToDisplay.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <div class="movie-poster">${movie.emoji}</div>
            <div class="movie-info">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-year">${movie.year}</div>
                <div class="movie-rating">⭐ ${movie.rating}</div>
            </div>
        `;
        
        movieCard.addEventListener('click', () => openMovieModal(movie));
        moviesGrid.appendChild(movieCard);
    });
}

// Open movie modal
function openMovieModal(movie) {
    modal.style.display = 'block';
    document.getElementById('modalTitle').textContent = movie.title;
    document.getElementById('modalDescription').textContent = movie.description;
    moviePlayer.src = movie.videoUrl;
    
    playBtn.onclick = () => {
        moviePlayer.play();
    };
    
    downloadBtn.onclick = () => {
        downloadMovie(movie);
    };
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
    moviePlayer.pause();
    moviePlayer.currentTime = 0;
}

// Download movie
function downloadMovie(movie) {
    alert(`Downloading: ${movie.title}...\n\nIn a real application, this would start a download.`);
    // In production, you would implement actual download functionality
    // For now, we'll just show an alert
}

// Search functionality
function searchMovies(query) {
    const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.description.toLowerCase().includes(query.toLowerCase())
    );
    
    if (filtered.length === 0) {
        moviesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No movies found.</p>';
    } else {
        displayMovies(filtered);
    }
}

// Setup event listeners
function setupEventListeners() {
    closeBtn.addEventListener('click', closeModal);
    
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    searchInput.addEventListener('input', (e) => {
        searchMovies(e.target.value);
    });
    
    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
      }

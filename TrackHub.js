// =======================
// SAMPLE DATA ARRAYS
// =======================
// Array of lost items (for demonstration purposes)
//// demonstration of a simple JavaScript application for a Lost and Found system
const sampleLostItems = [
    {
        id: 1,
        name: "Black Wireless Headphones",
        category: "electronics",
        location: "Library - 2nd Floor",
        date: "2023-10-15",
        description: "Sony WH-1000XM4 in black color with a small scratch on the left ear cup.",
        image: "https://via.placeholder.com/300x200?text=Headphones"
    },
    {
        id: 2,
        name: "Calculus Textbook",
        category: "books",
        location: "Math Building - Room 203",
        date: "2023-10-14",
        description: "Calculus: Early Transcendentals 8th Edition by James Stewart. Has my name written on the first page.",
        image: "https://via.placeholder.com/300x200?text=Calculus+Book"
    },
    {
        id: 3,
        name: "Student ID Card",
        category: "ids",
        location: "Cafeteria",
        date: "2023-10-16",
        description: "Student ID for John Doe (ID: 12345678). Please contact if found.",
        image: "https://via.placeholder.com/300x200?text=Student+ID"
    }
];
// Array of found items (for demonstration purposes)
const sampleFoundItems = [
    {
        id: 1,
        name: "Blue Water Bottle",
        category: "other",
        location: "Gym - Locker Room",
        date: "2023-10-16",
        description: "Blue Hydro Flask with a sticker of a mountain on it.",
        image: "https://via.placeholder.com/300x200?text=Water+Bottle",
        contact: "gym@campus.edu"
    },
    {
        id: 2,
        name: "Apple Watch",
        category: "electronics",
        location: "Science Building - Hallway",
        date: "2023-10-15",
        description: "Apple Watch Series 5 with a black sport band.",
        image: "https://via.placeholder.com/300x200?text=Apple+Watch",
        contact: "security@campus.edu"
    },
    {
        id: 3,
        name: "Notebook",
        category: "other",
        location: "Lecture Hall B",
        date: "2023-10-14",
        description: "Black notebook with chemistry notes from October.",
        image: "https://via.placeholder.com/300x200?text=Notebook",
        contact: "lostandfound@campus.edu"
    }
];

// DOM Elements
// Grabbing elements from the HTML by their IDs
const lostItemsGrid = document.getElementById('lost-items-grid');
const foundItemsGrid = document.getElementById('found-items-grid');
const reportLostBtn = document.getElementById('report-lost-btn');
const reportFoundBtn = document.getElementById('report-found-btn');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');
const closeButtons = document.querySelectorAll('.close');
const switchToRegister = document.getElementById('switch-to-register');
const switchToLogin = document.getElementById('switch-to-login');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Theme Toggle Functionality
// Get the theme toggle button and icon element
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// Function to update theme icon
// Apply or remove dark mode on the body and save preference to localStorage
function updateThemeIcon(isDarkMode) {
    themeIcon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
}

// Function to set theme
// When the theme toggle button is clicked, switch between light and dark mode
function setTheme(isDarkMode) {
    document.body.classList.toggle('dark-mode', isDarkMode);
    updateThemeIcon(isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Theme toggle click handler
themeToggle.addEventListener('click', () => {
    const isDarkMode = !document.body.classList.contains('dark-mode');
    setTheme(isDarkMode);
});

// Load saved theme on page load
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setTheme(isDarkMode);
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches);
    }
});

// Display sample items
function displayItems() {
    // Clear existing items
    lostItemsGrid.innerHTML = '';
    foundItemsGrid.innerHTML = '';
    
    // Display lost items
    sampleLostItems.forEach(item => {
        const itemCard = createItemCard(item, 'lost');
        lostItemsGrid.appendChild(itemCard);
    });
    
    // Display found items
    sampleFoundItems.forEach(item => {
        const itemCard = createItemCard(item, 'found');
        foundItemsGrid.appendChild(itemCard);
    });
}

// Create item card HTML
function createItemCard(item, type) {
    const card = document.createElement('div');
    card.className = 'item-card';
    
    card.innerHTML = `
        <div class="item-image">
            <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="item-details">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p><strong>Category:</strong> ${item.category}</p>
            <p><strong>Location:</strong> ${item.location}</p>
            <p><strong>Date:</strong> ${item.date}</p>
            <p><strong>Contact:</strong> ${item.contact || 'N/A'}</p>
        </div>
    `;

    return card;
}

// Loading Animation
window.addEventListener('load', () => {
    const loading = document.querySelector('.loading');
    if (loading) {
        setTimeout(() => {
            loading.classList.add('hidden');
        }, 1000);
    }
});

// Scroll Animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .team-member, .stat-item, .contact-form');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initial animation state
document.querySelectorAll('.feature-card, .team-member, .stat-item, .contact-form').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
});

// Add scroll event listener
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Animated Counter for About Stats
function animateStats() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const text = counter.textContent.trim();
        let target = 0;
        let suffix = '';
        if (text.endsWith('+')) {
            target = parseInt(text.replace(/\D/g, ''));
            suffix = '+';
        } else if (text.endsWith('%')) {
            target = parseInt(text.replace(/\D/g, ''));
            suffix = '%';
        } else if (!isNaN(parseInt(text))) {
            target = parseInt(text);
        } else {
            return;
        }
        let current = 0;
        const increment = Math.ceil(target / 60);
        function updateCounter() {
            if (current < target) {
                current += increment;
                if (current > target) current = target;
                counter.textContent = current + suffix;
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + suffix;
            }
        }
        updateCounter();
    });
}
// Run animated counters when the page loads
window.addEventListener('load', animateStats);

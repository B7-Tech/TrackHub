// Sample data for demonstration
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
<script>
  const toggleBtn = document.getElementById('theme-toggle');

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Optional: save theme in localStorage
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });

  // Load saved theme on page load
  window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    }
  });
</script>


// Create item card HTML
function createItemCard(item, type) {
    const card = document.createElement('div');
    card.className = 'item-card';
    
    card.innerHTML = `
        <div class="item-image">
            <img src="${item.image}" alt="${item.name}">
        </

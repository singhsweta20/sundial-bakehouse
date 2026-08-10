// Bakery Menu Data
const menuItems = [
  {
    id: 1,
    title: "Artisanal Sourdough",
    category: "bakery",
    price: "₹180",
    image: "https://images.unsplash.com/photo-1585478259715-876a6a81fc08?w=500&auto=format&fit=crop&q=80",
    description: "Naturally fermented, crisp crust, and soft airy interior baked fresh daily."
  },
  {
    id: 2,
    title: "Butter Croissant",
    category: "bakery",
    price: "₹120",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop&q=80",
    description: "Flaky, buttery, layered French pastry baked fresh every morning."
  },
  {
    id: 3,
    title: "Belgian Chocolate Truffle",
    category: "cakes",
    price: "₹499",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=80",
    description: "Rich dark chocolate ganache layered with moist chocolate sponge."
  },
  {
    id: 4,
    title: "Blueberry Cheesecake",
    category: "cakes",
    price: "₹160",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&auto=format&fit=crop&q=80",
    description: "Creamy baked cheesecake topped with tangy fresh blueberry compote."
  },
  {
    id: 5,
    title: "Signature Cappuccino",
    category: "coffee",
    price: "₹150",
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=500&auto=format&fit=crop&q=80",
    description: "Rich espresso blended with fresh steam-foamed milk."
  },
  {
    id: 6,
    title: "Red Velvet Cupcake",
    category: "cakes",
    price: "₹85",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&auto=format&fit=crop&q=80",
    description: "Soft red velvet sponge topped with smooth cream cheese frosting."
  }
];

const menuGrid = document.getElementById('menu-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

// Render Items on Screen
function displayMenuItems(items) {
  menuGrid.innerHTML = items.map(item => {
    const whatsappMsg = encodeURIComponent(`Hello Sundial Bakehouse, I want to order: ${item.title} (${item.price})`);
    return `
      <div class="menu-card">
        <div class="menu-img-wrapper">
          <img src="${item.image}" alt="${item.title}">
        </div>
        <div class="menu-card-content">
          <div>
            <div class="item-header">
              <h3 class="item-title">${item.title}</h3>
              <span class="item-price">${item.price}</span>
            </div>
            <p class="item-desc">${item.description}</p>
          </div>
          <a href="https://wa.me/917667053130?text=${whatsappMsg}" target="_blank" class="order-item-btn">
            <i class="fa-brands fa-whatsapp"></i> Order This Item
          </a>
        </div>
      </div>
    `;
  }).join('');
}

// Category Filtering
filterBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    filterBtns.forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');

    const category = e.target.dataset.category;
    if (category === 'all') {
      displayMenuItems(menuItems);
    } else {
      const filtered = menuItems.filter(item => item.category === category);
      displayMenuItems(filtered);
    }
  });
});

// Smooth Click Navigation Setup
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Initial Setup
document.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menuItems);
});

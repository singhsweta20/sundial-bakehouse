const menuItems = [
  // --- BREADS & BAKERY ---
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
    title: "Garlic Herb Focaccia",
    category: "bakery",
    price: "₹140",
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=500&auto=format&fit=crop&q=80",
    description: "Italian flatbread baked with rosemary, garlic oil, and sea salt."
  },
  {
    id: 4,
    title: "Almond Croissant",
    category: "bakery",
    price: "₹150",
    image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=500&auto=format&fit=crop&q=80",
    description: "Toasted croissant filled with almond frangipane and flaked almonds."
  },
  {
    id: 5,
    title: "Cinnamon Glaze Roll",
    category: "bakery",
    price: "₹110",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=500&auto=format&fit=crop&q=80",
    description: "Soft swirled sweet dough packed with aromatic cinnamon glaze."
  },
  {
    id: 6,
    title: "Paneer Tikka Puff",
    category: "bakery",
    price: "₹65",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500&auto=format&fit=crop&q=80",
    description: "Crispy flaky puff pastry filled with spiced paneer tikka filling."
  },
  {
    id: 7,
    title: "Cheese & Garlic Baguette",
    category: "bakery",
    price: "₹130",
    image: "https://images.unsplash.com/photo-1573335553610-a871dfd95bf5?w=500&auto=format&fit=crop&q=80",
    description: "Crusty French baguette stuffed with garlic butter and melted mozzarella."
  },
  {
    id: 8,
    title: "Chocolate Pain au Chocolat",
    category: "bakery",
    price: "₹140",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=500&auto=format&fit=crop&q=80",
    description: "Traditional French flaky pastry stuffed with dark Belgian chocolate bars."
  },

  // --- CAKES, TARTS & DESSERTS ---
  {
    id: 9,
    title: "Belgian Chocolate Truffle",
    category: "cakes",
    price: "₹499",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=80",
    description: "Rich dark chocolate ganache layered with moist chocolate sponge."
  },
  {
    id: 10,
    title: "Blueberry Cheesecake",
    category: "cakes",
    price: "₹160",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&auto=format&fit=crop&q=80",
    description: "Creamy baked cheesecake topped with tangy fresh blueberry compote."
  },
  {
    id: 11,
    title: "Red Velvet Cupcake",
    category: "cakes",
    price: "₹85",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&auto=format&fit=crop&q=80",
    description: "Soft red velvet sponge topped with smooth cream cheese frosting."
  },
  {
    id: 12,
    title: "Fresh Strawberry Tart",
    category: "cakes",
    price: "₹130",
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?w=500&auto=format&fit=crop&q=80",
    description: "Crisp pastry shell filled with vanilla custard and fresh strawberries."
  },
  {
    id: 13,
    title: "French Macarons (6 Pcs)",
    category: "cakes",
    price: "₹290",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=500&auto=format&fit=crop&q=80",
    description: "Assorted colourful meringue cookies filled with chocolate & fruit ganache."
  },
  {
    id: 14,
    title: "Classic Fudgy Brownie",
    category: "cakes",
    price: "₹95",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format&fit=crop&q=80",
    description: "Gooey chocolate brownie made with rich cocoa and roasted walnuts."
  },
  {
    id: 15,
    title: "Classic Tiramisu Jar",
    category: "cakes",
    price: "₹180",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&auto=format&fit=crop&q=80",
    description: "Coffee-soaked ladyfingers layered with mascarpone cream & cocoa powder."
  },
  {
    id: 16,
    title: "Mango Passion Pastry",
    category: "cakes",
    price: "₹140",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&auto=format&fit=crop&q=80",
    description: "Light vanilla sponge infused with fresh Alphonso mango mousse."
  },

  // --- BEVERAGES ---
  {
    id: 17,
    title: "Signature Cappuccino",
    category: "coffee",
    price: "₹150",
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=500&auto=format&fit=crop&q=80",
    description: "Rich espresso blended with fresh steam-foamed milk."
  },
  {
    id: 18,
    title: "Iced Hazelnut Latte",
    category: "coffee",
    price: "₹170",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&auto=format&fit=crop&q=80",
    description: "Chilled espresso served over ice with hazelnut syrup and cold milk."
  },
  {
    id: 19,
    title: "Iced Cold Brew",
    category: "coffee",
    price: "₹140",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&auto=format&fit=crop&q=80",
    description: "Slow-steeped Arabica coffee served smooth over ice."
  },
  {
    id: 20,
    title: "Rich Hot Chocolate",
    category: "coffee",
    price: "₹160",
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=500&auto=format&fit=crop&q=80",
    description: "Warm melted dark chocolate topped with fluffy marshmallows."
  },
  {
    id: 21,
    title: "Matcha Green Tea Latte",
    category: "coffee",
    price: "₹180",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=500&auto=format&fit=crop&q=80",
    description: "Authentic Japanese green tea whisked with steamed oat milk."
  }
];

const menuGrid = document.getElementById('menu-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

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

document.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menuItems);
});

const products = [
  {
    available: true,
    name: "Gaming Pc - Wit",
    price: "$49",
    img: "images/pc1.png",
    description: "Een krachtige witte gaming PC."
  },
  {
    available: false,
    name: "Gaming Pc - Zwart",
    price: "$59",
    img: "images/pc2.png",
    description: "Een stijlvolle zwarte gaming PC."
  },
  {
    available: true,
    name: "Gaming Pc - Wit 2",
    price: "$69",
    img: "images/pc3.png",
    description: "Een tweede witte gaming PC variant."
  }
];


const template = document.getElementById('productTemplate');
const container = document.getElementById('productsContainer');

products.forEach(product => {
    const clone = template.cloneNode(true);
    clone.style.display = 'block';
    
    clone.querySelector('.item__status').textContent = product.status;
    
    const img = clone.querySelector('.item__img');
    img.setAttribute('src', product.img);
    img.setAttribute('alt', product.name);
    
    clone.querySelector('.item__price').textContent = product.price;
    clone.querySelector('.item__name').textContent = product.name;
    clone.querySelector('.item__description').textContent = product.description;
    
    container.appendChild(clone);
});
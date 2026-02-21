const container = document.getElementById("products");

fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    data.forEach(product => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${product.image}" width="100">
        <h3>${product.title}</h3>
        <p>$${product.price}</p>
      `;

      container.appendChild(card);
    });
  });
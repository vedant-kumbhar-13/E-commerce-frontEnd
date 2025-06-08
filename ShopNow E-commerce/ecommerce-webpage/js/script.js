
document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("product-grid");
    fetch("https://fakestoreapi.com/products?limit=6")
        .then(res => res.json())
        .then(products => {
            products.forEach(prod => {
                const card = document.createElement("div");
                card.className = "card";
                card.innerHTML = `
                    <img src="${prod.image}" alt="${prod.title}" />
                    <h3>${prod.title.substring(0, 30)}...</h3>
                    <p>$${prod.price}</p>
                `;
                grid.appendChild(card);
            });
        });
});

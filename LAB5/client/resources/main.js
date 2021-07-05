window.onload = function() {
    getProducts();

    document.getElementById('nav-home').onclick = function(event) {
        event.preventDefault();
        getProducts();
    }

    // add/update product
    document.getElementById('product-btn').onclick = function(event) {
        event.preventDefault();
        if (!document.getElementById('product-btn').dataset.id) {
            addProduct();
        } else {
            editProduct();
        }
    }
}

async function getProducts() {
    let products = await fetch('http://localhost:3000/books/').then(response => response.json());
    products.forEach(prod => renderBook(prod));
}
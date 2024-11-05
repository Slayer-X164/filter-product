const productsContainer = document.querySelector('.products');
const searchInput = document.querySelector('.search')
const catContainer = document.querySelector('.catContainer')
const priceRange = document.querySelector('.priceRange')
const PriceValue = document.querySelector('.PriceValue')

async function getProductData() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    displayProduct(data);
}
getProductData();

const displayProduct = (filteredProduct)=>{
    productsContainer.innerHTML+=filteredProduct.map((eachProduct)=>{
        return `
        <div class="product">
            <img src="${eachProduct.image}" alt="">
            <span class="title">${eachProduct.title}</span>
            <span class="priceText">$${eachProduct.price}</span>
        </div>

        `
    }).join("")
}

searchInput.addEventListener('keyup',(e)=>{
    console.log(e.target.value);

})
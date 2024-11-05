const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const catContainer = document.querySelector(".catContainer");
const priceRange = document.querySelector(".priceRange");
const PriceValue = document.querySelector(".PriceValue");

let productData = [];

async function getProductData() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  productData = data;
  console.log(productData);

  displayProduct(productData);
}

const displayProduct = (filteredProduct) => {
  productsContainer.innerHTML = "";

  if (filteredProduct.length === 0) {
    productsContainer.innerHTML = `<p>NO Products Found</p>`;
  } else {
    productsContainer.innerHTML = filteredProduct
      .map((eachProduct) => {
        return `
            <div class="product">
                <img src="${eachProduct.image}" alt="">
                <span class="title">${eachProduct.title}</span>
                <span class="priceText">$${eachProduct.price}</span>
            </div>

            `;
      })
      .join("");
  }
};

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredData = productData.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm)
    );
  });

  console.log(filteredData);

  displayProduct(filteredData);
});

getProductData();

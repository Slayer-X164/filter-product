const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const catContainer = document.querySelector(".catContainer");
const priceRange = document.querySelector(".priceRange");
const PriceValue = document.querySelector(".PriceValue");
const menu = document.querySelector(".menu");
const mobileNav = document.querySelector(".mobileNav");
const body = document.querySelector("body");
let productData = [];
let isMobileNavOpen = false;

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

const mobileNavFunc = () => {
  menu.addEventListener("click", () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
      mobileNav.classList.add("activeNav");
      body.style.overflowY = "hidden";
    } else {
      mobileNav.classList.remove("activeNav");
      body.style.overflowY = "scroll";
    }
  });
};
mobileNavFunc();
getProductData();

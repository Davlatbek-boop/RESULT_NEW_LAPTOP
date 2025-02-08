async function getProducts() {
  const response = await fetch("https://dummyjson.com/products");
  const result = await response.json();
  console.log(result.products);

  result.products.forEach((product) => {
    const div = document.createElement("div");
    div.style.cssText =
      "width: 200px; height: auto;  justify-content: space-evenly; border: 1px solid black; padding: 20px; border-radius: 5px";
    const img = document.createElement("img");
    img.style.cssText = "width: 200px; height: 200px; border-radius: 4px;";
    img.setAttribute("src", product.images[0]);
    const h3 = document.createElement("h3");
    h3.textContent = product.title;
    const pRating = document.createElement("p");
    pRating.innerHTML +=  product.rating;
    pRating.style.cssText ="margin-left: 10px;  ";
    const pPrice = document.createElement("p");
    pPrice.textContent = product.price;
    pPrice.style.cssText =
      "padding: 2px 5px; width: 60px; background-color: yellow; border-radius: 5px;";
    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(pRating);
    div.appendChild(pPrice);
    const divMain = document.querySelector(".main");
    divMain.style.cssText =
      "display: flex; justify-content: space-between; flex-wrap: wrap; gap: 20px; padding: 10px;";
    divMain.appendChild(div);
  });
}
getProducts();

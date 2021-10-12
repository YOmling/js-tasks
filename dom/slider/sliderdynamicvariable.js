const left = document.querySelector("#left");
const right = document.querySelector("#right");
const itemList = document.querySelector("#items");
const computedStyles = window.getComputedStyle(itemList);
const items = document.querySelectorAll(".item");

const minRight = 0;
const itemWidth = getComputedStyle(items[0]).width;
const step = parseInt(itemWidth);
const preShowItems = 300 / step;
const maxRight = (items.length -preShowItems) * step;
let currentRight = 0;

itemList.style.right = currentRight;

right.addEventListener("click", e => {
e.preventDefault();
if (currentRight < maxRight) {
  currentRight += step;
  itemList.style.right = `${currentRight}px`;
}
})

left.addEventListener("click", e => {
  e.preventDefault();
  if (currentRight > minRight) {
    currentRight -= step;
    itemList.style.right = `${currentRight}px`;
  }
})

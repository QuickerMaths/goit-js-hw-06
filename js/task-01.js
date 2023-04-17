const listEl = document.getElementById("categories");
const itemEl = document.querySelectorAll(".item");

function countCategories() {
  console.log(`Number of categories: ${listEl.children.length}`);
}

function displayCategories() {
  itemEl.forEach((cat) => {
    console.log(`
        Category: ${cat.firstElementChild.innerHTML}.
        Elements: ${cat.lastElementChild.children.length}
        `);
  });
}

countCategories();
displayCategories();

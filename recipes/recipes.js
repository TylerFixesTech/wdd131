const recipes = [
  {
    name: "Apple Crisp",
    image: "images/apple-crisp.jpg",
    type: "dessert",
    rating: 4,
    description:
      "This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream."
  }
];

function createRating(rating) {
  let stars = "";

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += '<span aria-hidden="true" class="icon-star">⭐</span>';
    } else {
      stars += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
    }
  }

  return `
    <span
      class="rating"
      role="img"
      aria-label="Rating: ${rating} out of 5 stars"
    >
      ${stars}
    </span>
  `;
}

function recipeTemplate(recipe) {
  return `
    <article class="recipe-card">
      <img
        src="${recipe.image}"
        alt="${recipe.name} served warm with vanilla ice cream"
        class="recipe-image"
      >

      <div class="recipe-content">
        <span class="recipe-tag">${recipe.type}</span>
        <h1 class="recipe-title">${recipe.name}</h1>
        ${createRating(recipe.rating)}
        <p class="recipe-description">${recipe.description}</p>
      </div>
    </article>
  `;
}

function renderRecipes(recipeList) {
  const recipeContainer = document.querySelector(".recipes");

  recipeContainer.innerHTML = recipeList.map(recipeTemplate).join("");
}

function searchRecipes(searchTerm) {
  const filteredRecipes = recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  renderRecipes(filteredRecipes);
}

document.querySelector(".search-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const searchInput = document.querySelector("#recipe-search");
  searchRecipes(searchInput.value.trim());
});

renderRecipes(recipes);
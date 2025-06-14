const cuisineContainer = document.getElementById("cuisine-list");

async function loadCuisines() {
  const res = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
  const cuisines = res.data.meals;

  cuisines.forEach(async (cuisine) => {
    const area = cuisine.strArea;
    const mealRes = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    const firstMeal = mealRes.data.meals[0];

    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${area}</h3>
      <img src="${firstMeal.strMealThumb}" alt="${firstMeal.strMeal}" />
    `;
    div.addEventListener("click", () => {
      localStorage.setItem("selectedCuisine", area);
      window.location.href = "recipe.html";
    });

    cuisineContainer.appendChild(div);
  });
}

loadCuisines();

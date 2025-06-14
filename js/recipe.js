const area = localStorage.getItem("selectedCuisine");
const mealName = document.getElementById("meal-name");
const mealImg = document.getElementById("meal-img");
const mealInstructions = document.getElementById("meal-instructions");

async function loadRecipe() {
  const mealList = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
  const mealId = mealList.data.meals[0].idMeal;
  const mealDetails = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
  const meal = mealDetails.data.meals[0];

  mealName.textContent = meal.strMeal;
  mealImg.src = meal.strMealThumb;
  mealInstructions.textContent = meal.strInstructions;
}

loadRecipe();

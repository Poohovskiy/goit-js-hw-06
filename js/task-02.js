const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');
const listItemsEl = [];

ingredients.forEach(ingredient => {
  const ingredientItemEl = document.createElement('li');
  ingredientItemEl.classList.add('item');
  ingredientItemEl.textContent = ingredient;
  listItemsEl.push(ingredientItemEl);
});

ingredientsListEl.append(...listItemsEl);
import { render } from "@testing-library/react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Борщ",
    image:
      "https://img.povar.ru/main/ab/23/b4/9c/samii_vkusnii_borsh-404089.jpg",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Паста",
    image:
      "https://s1.eda.ru/StaticContent/Photos/150525210126/150601174518/p_O.jpg",
    rating: 4.4,
  },
  {
    id: 3,
    name: "Пицца",
    image:
      "https://s1.eda.ru/StaticContent/Photos/120131085053/171027192707/p_O.jpg",
    // rating: 4.6,
  },
  {
    id: 5,
    name: "Стейк",
    image:
      "https://www.koolinar.ru/all_image/recipes/131/131565/recipe_f17a18ba-8b57-4bc4-89c8-417c423a250f.jpg",
    rating: "5",
  },
];

function Food({ name, image, rating }) {
  return (
    <div className="food">
      <h3>Я люблю кушать {name}</h3>
      <h4>{rating} / 5</h4>
      <img src={image} alt={name} width="auto" height="150px" />
    </div>
  );
}
Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number,
};
function renderFood(dish) {
  return (
    <Food
      key={dish.id}
      name={dish.name}
      image={dish.image}
      rating={dish.rating}
    />
  );
}

function App() {
  return (
    <div className="App">
      {console.log(foodILike.map(renderFood))}
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;

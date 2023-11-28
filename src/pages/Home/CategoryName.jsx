import { useLoaderData } from "react-router-dom";
import Meal from "./Meal";
const CategoryName = () => {
  const { meals } = useLoaderData();
  const url = window.location.href.split('/');
  const item = url[4];
  return (
    <div className="container w-full max-w-screen-xl mx-auto">
      <h2 className="text-4xl font-semibold inline-block">
        Available Items for{" "}
        <span className="text-4xl inline-block font-semibold text-blue-600">
          {item}
        </span>
      </h2>
      <div className="grid grid-cols-3 gap-4 mx-auto">
          {meals.map((meal) => (
            <Meal key={meal.idMeal} meal={meal}></Meal>
          ))}
      </div>
    </div>
  );
};

export default CategoryName;

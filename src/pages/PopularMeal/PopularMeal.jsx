import { useLoaderData } from "react-router-dom";
import Latest from "../LatestMeal/Latest";

const PopularMeal = () => {
  const { meals } = useLoaderData();
  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <h2 className="text-2xl font-medium mb-6">Popular Meals</h2>
      <div className="grid grid-cols-3 gap-4">
        {meals.map((meal) => (
          <Latest key={meal.idMeal} meal={meal}></Latest>
        ))}
      </div>
    </div>
  );
};

export default PopularMeal;

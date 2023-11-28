/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Meal = (props) => {
  const { idMeal, strMeal, strMealThumb } = props.meal;
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-100 mt-8">
        <Link to={`/meals/lookup/${idMeal}`}>
          <img className="rounded-t-lg" src={strMealThumb} alt="" />
        </Link>
        <div className="p-5">
          <Link to={`/meals/lookup/${idMeal}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {strMeal}
            </h5>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Meal;

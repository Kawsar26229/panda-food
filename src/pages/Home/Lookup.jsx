/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useLoaderData } from "react-router-dom";

const Lookup = () => {
  const { meals } = useLoaderData();
  const [ingredientData, setIngredientData] = useState([]);
    console.log(ingredientData);
  useEffect(() => {
    const data = meals[0];
    // Transform JSON data to an array of objects
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = data[`strIngredient${i}`];
      const measure = data[`strMeasure${i}`];
      if (ingredient && measure) {
        ingredients.push({ ingredient, measure });
      }
    }
    setIngredientData(ingredients);
  },[meals]);

   // Meals Values
  const {
    strMeal,
    strArea,
    strCategory,
    strInstructions,
    strMealThumb,
    strTags,
    strYoutube,
  } = meals[0];
  return (
    <div>
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-2 gap-8 mt-36 bg-slate-100 rounded-lg">
        <div>
          <img className="rounded-lg" src={strMealThumb} alt="Meal Thumbnail" />
        </div>
        <div>
          <h2 className="text-3xl mb-2">
            <em>Meal:</em> {strMeal}
          </h2>
          <p className="text-lg mb-2">
            <strong>
              <em>Category:</em>
            </strong>{" "}
            {strCategory}
          </p>
          <p className="text-lg mb-2">
            <strong>
              <em>Area:</em>
            </strong>{" "}
            {strArea}
          </p>
          <p className="text-lg mb-2">
            <strong>
              <em>Instruction:</em>
            </strong>{" "}
            {strInstructions}
          </p>
          <p className="text-lg mb-8">
            <strong>
              <em>Tags: </em>
            </strong>
            <Link>{strTags}</Link>
          </p>
          <div>
            <ReactPlayer
              width="300px"
              height="185px"
              url={strYoutube}
            ></ReactPlayer>
          </div>
        </div>
      </div>
      <div className="w-full max-w-screen-xl mx-auto mt-16">
        <h2 className="text-2xl mb-6">Recipie Details: </h2>
        {/* Table Section */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                >
                  Ingredients
                </th>
                <th scope="col" className="px-6 py-3">
                  Measurements
                </th>
              </tr>
            </thead>
            <tbody>
            {ingredientData.map((item, index) => (
            <tr className="border-b border-gray-200 dark:border-gray-700" key={index}>
              <td
                  scope="row"
                  className="px-6 py-4 text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                    {item.ingredient}
                </td>
                <td className="px-6 py-4">{item.measure}</td>
            </tr>
          ))}
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Lookup;

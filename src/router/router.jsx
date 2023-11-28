import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import LatestMeal from "../pages/LatestMeal/LatestMeal";
import PopularMeal from "../pages/PopularMeal/PopularMeal";
import RandomMeal from "../pages/RandomMeal/RandomMeal";
import CategoryName from "../pages/Home/CategoryName";
import Lookup from "../pages/Home/Lookup";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () =>
          fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
      },
      {
        path: "/latest",
        element: <LatestMeal></LatestMeal>,
        loader: async () => fetch("/latest.json"),
      },
      {
        path: "/popular",
        element: <PopularMeal></PopularMeal>,
        loader: async () => fetch("/latest.json"),
      },
      {
        path: "/random",
        element: <RandomMeal></RandomMeal>,
        loader: async () =>
          fetch("https://www.themealdb.com/api/json/v1/1/random.php"),
      },
      {
        path: "/category/:categoryName",
        element: <CategoryName></CategoryName>,
        loader: async ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryName}`
          ),
      },
      {
        path: "/meals/lookup/:mealId",
        element: <Lookup></Lookup>,
        loader: async ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
    ],
  },
]);

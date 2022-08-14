import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../pages/home/Home';
import RecipeDetails from "../pages/recipe/RecipeDetails";
import Recipes from "../pages/recipe/Recipes";
import UserDetails from "../pages/user/UserDetails";
import Users from "../pages/user/Users";
import Layout from "./Layout";
import NotFound from "./NotFound";

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="user">
              <Route index element={<Users />}></Route>
              <Route path=":id" element={<UserDetails />}></Route>
            </Route>
            <Route path="recipe">
              <Route index element={<Recipes />}></Route>
              <Route path=":id" element={<RecipeDetails />}></Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter
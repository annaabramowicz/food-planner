import React, { useEffect } from "react";
import Ingredients from "../pages/Ingredients/Ingredients";
import Fridge from "../pages/Fridge/Fridge";
import Recipes from "../pages/Recipes/Recipes";
import Home from "../pages/Home/Home";
import Navigation from "./Navigation/Navigation";
import Flex from "components/Flex/Flex";
import Link from "components/Link/Link";
import Box from "components/Box/Box";
import Icon from "components/Icon/Icon";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { getRecipesAsyc } from "store/recipes/recipes";
import {
  IoHomeOutline,
  IoCartOutline,
  IoLibraryOutline,
  IoJournalOutline,
} from "react-icons/io5";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipesAsyc());
  }, [dispatch]);

  return (
    <>
      <Box width="600px" margin="0 auto">
        <Router>
          <Flex>
            <Navigation>
              <NavLink to="/">
                <Link
                  _hover={{
                    background: "white",
                    color: "teal.500",
                  }}
                >
                  <Flex m={2} flexDirection="column">
                    <Icon as={IoHomeOutline} />
                    Home
                  </Flex>
                </Link>
              </NavLink>
              <NavLink to="/ingredients">
                <Link
                  _hover={{
                    background: "white",
                    color: "teal.500",
                  }}
                >
                  <Flex m={2} flexDirection="column">
                    <Icon as={IoCartOutline} />
                    Ingredients
                  </Flex>
                </Link>
              </NavLink>
              <NavLink to="/fridge">
                <Link
                  _hover={{
                    background: "white",
                    color: "teal.500",
                  }}
                >
                  <Flex m={2} flexDirection="column">
                    <Icon as={IoJournalOutline} />
                    Fridge
                  </Flex>
                </Link>
              </NavLink>
              <NavLink to="/recipes">
                <Link
                  _hover={{
                    background: "white",
                    color: "teal.500",
                  }}
                >
                  <Flex m={2} flexDirection="column">
                    <Icon as={IoLibraryOutline} />
                    Recipes
                  </Flex>
                </Link>
              </NavLink>
            </Navigation>
          </Flex>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/ingredients">
              <Ingredients />
            </Route>
            <Route path="/fridge">
              <Fridge />
            </Route>
            <Route path="/recipes">
              <Recipes />
            </Route>
          </Switch>
        </Router>
      </Box>
    </>
  );
}

export default App;

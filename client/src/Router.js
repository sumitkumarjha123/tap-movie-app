import { Route, Switch } from "react-router-dom";
import Body from "./Body";

//import Home from "./pages/Home";
import Addmovies from "./Addmovies";
//import MovieDetails from "./pages/MovieDetails";

const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Body/>
            </Route>
            <Route exact path="/add-movie">
                <Addmovies />
            </Route>
        </Switch>
    )
}

export default Router;
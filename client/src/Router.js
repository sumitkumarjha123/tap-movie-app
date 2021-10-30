import { Route, Switch } from "react-router-dom";
import Body from "./Body";
import Addmovies from "./Addmovies";
import Viewdetail from "./Viewdetail";

const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Body/>
            </Route>
            <Route exact path="/add-movie">
                <Addmovies />
            </Route>
            <Route exact path="/:movieId">
                <Viewdetail/>
            </Route>
        </Switch>
    )
}

export default Router;
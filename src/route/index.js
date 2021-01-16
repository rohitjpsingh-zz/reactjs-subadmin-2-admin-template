import { BrowserRouter, Route, Switch } from "react-router-dom";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import About from "../components/About";

function AppRouter() {
  return (
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} exact />
        <Route path="/about-us" component={About} />
        <Route exact path='/login' component={Login} />
        {/* <PublicRoute restricted={true} component={Login} path="/" exact />
          <PrivateRoute component={Home} path="/home" exact /> */}
      </Switch>
  );
}

export default AppRouter;

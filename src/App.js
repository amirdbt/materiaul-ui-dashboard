import React from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp"
import Settings from "./components/Settings"
import ResetPassword from "./components/ResetPassword"
import { Switch, Route, withRouter } from "react-router-dom";

const Main = withRouter(({ location }) => {
  return (
    <>
      {location.pathname !== "/sign-in" && location.pathname !== "/sign-up" && location.pathname !== "/reset-password" && (
        <>
          <Sidebar />
        </>
      )}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/projects" component={Projects} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/settings" component={Settings} />
        <Route path="/reset-password" component={ResetPassword} />
      </Switch>
    </>
  );
});

const App = () => {
  return (
    <div>
      <Main />
    </div>
  );
};

export default App;

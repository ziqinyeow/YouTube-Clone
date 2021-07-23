import { useEffect } from "react";

//dependencies
// import styled from "styled-components";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

//fonts
import "./fonts/Mulish-Black.ttf";
import "./fonts/Mulish-Bold.ttf";
import "./fonts/Mulish-ExtraBold.ttf";
import "./fonts/Mulish-ExtraLight.ttf";
import "./fonts/Mulish-Light.ttf";
import "./fonts/Mulish-Medium.ttf";
import "./fonts/Mulish-Regular.ttf";
import "./fonts/Mulish-SemiBold.ttf";

//pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Watch from "./pages/Watch";
import Search from "./pages/Search";

//components
import Layout from "./components/Layout";

//redux
import { useSelector } from "react-redux";

function App() {
  const history = useHistory();
  const { accessToken, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!loading && !accessToken) {
      history.push("/auth");
    }
  }, [accessToken, loading, history]);

  return (
    <Switch>
      <Route path="/auth">
        <Login />
      </Route>
      <Route path="/" exact>
        <Layout expand={true}>
          <Home />
        </Layout>
      </Route>
      <Route path="/watch/:id">
        <Layout expand={false}>
          <Watch />
        </Layout>
      </Route>
      <Route path="/search/:query">
        <Layout expand={false}>
          <Search />
        </Layout>
      </Route>
      <Route>
        <Layout expand={true}>
          <Redirect to="/" />
        </Layout>
      </Route>
    </Switch>
  );
}

export default App;

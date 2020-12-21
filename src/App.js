import "./App.css";
import { Route, Switch } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/rooms">
          <Rooms />
        </Route>
        <Route exact path="/rooms/:slug">
          <SingleRoom />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </>
  );
}

export default App;

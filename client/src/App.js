import "./App.css";
import { Home, Landing, Detail, Form } from "./Views";
import NavBar from "./components/NavBar/NavBar";
import { Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" &&
        location.pathname !== "/create" &&
        !/^\/detail\/(\d+|[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12})$/.test(
          location.pathname
        ) &&
        location.pathname !== "/" && <NavBar />}
      <Route exact path="/" component={Landing} />
      <Route path="/home" render={() => <Home />} />
      <Route exact path="/detail/:id" component={Detail} />
      <Route exact path="/create" component={Form} />
    </div>
  );
}

export default App;

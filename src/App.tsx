import React from "react";
import "./App.scss";
import "./assets/scss/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/moleculas/header/Header";
import { Home } from "./pages/Home/Home";
import { Users } from "./pages/Users/Users";
import { UserDetails } from "./pages/UserDetails/UserDetails";
import { Footer } from "./components/moleculas/footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="content">
          <Switch>
            <Route exact path="/users" component={Users} />
            <Route path="/users/:id" component={UserDetails} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

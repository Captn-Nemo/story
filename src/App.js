import React from "react";
import HomeLayout from "./Layout/homePage/home";
import "./App.css";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { Navigation } from "./containers/navigation/navigation";
import { Row, Col } from "react-bootstrap";
import { Footer } from "./containers/footer";
import BookSummary from "./components/BookComponent/summaryBook";
import FolosiComponent from "./components/Folosi/Folosi";
// import BookGenerator from './components/bookgenerator'
import BookGenerator from "./components/PDF/PDF";
import { TypeYourOwn } from "./Layout/yourOwn/typeOwn";
import { Templates } from "./Layout/templates/templates";
import { Guided } from "./Layout/guided/guided";
//import Bubble from './components/BrowseComponent/Bubble';
// const Doodlebar = require("./assets/images/doodlesBar.svg");
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <header>
            <Row className="bg-info discount">
              <Col>
                <p
                  // style={{ fontSize: "1vw" }}
                  className="text-light text-center"
                >
                  place for discount code or whatever we need to add
                </p>
              </Col>
            </Row>
          </header>
          <nav className="sticky-top mb-3">
            <Navigation />
          </nav>
          <Switch>
            <Route path="/projects/storically/book" exact>
              <BookSummary />
            </Route>
            <Route path="/projects/storically/book/payment/pdf" exact>
              <BookGenerator />
            </Route>
            <Route path="/projects/storically/book/payment" exact>
              <FolosiComponent />
            </Route>
            <Route path="/projects/storically/yourown" exact>
              <TypeYourOwn />
            </Route>
            <Route path="/projects/storically" exact>
              <HomeLayout />
            </Route>
            <Route path="/projects/storically/product" exact>
              <Templates />
            </Route>
            <Route path="/projects/storically/yourown/guided" exact>
              <Guided />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

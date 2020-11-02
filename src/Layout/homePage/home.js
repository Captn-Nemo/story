import React from "react";
import { Row, Col } from "react-bootstrap";
import { BrowseTitles } from "../../containers/browseTitles/browseTitles";
import { Footer } from "../../containers/footer";
import { Header } from "../../containers/header";
import { KidsBG } from "../../containers/KidsBg/kids";

import { YourStory } from "../../containers/yourStory/yourstory";
import "./home.css";
const HomeLayout = () => {
  React.useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);
  return (
    <>
      <section>
        <Header />
      </section>
      <section id="BrowseTitles">
        <BrowseTitles />
      </section>
      <section>
        <Row className="kids">
          <KidsBG />
        </Row>
      </section>
      <section>
        <Row className="bg-light mb-5 mb-xl-10">
          <YourStory />
        </Row>
      </section>
    </>
  );
};

export default HomeLayout;

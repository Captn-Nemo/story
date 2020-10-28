import React from "react";
import { Row, Col } from "react-bootstrap";
import { BrowseTitles } from "../../containers/browseTitles/browseTitles";
import { FAQ } from "../../containers/yourOwnPage/faq";
import { ProdHeader } from "../../containers/yourOwnPage/header/header";
import { LandingBg } from "../../containers/yourOwnPage/landingBg";
import { Review } from "../../containers/yourOwnPage/review";

const ProductLayout = () => {
  React.useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);
  return (
    <>
      <section style={{ marginTop: "2%" }}>
        <ProdHeader />
      </section>
      <section>
        <LandingBg />
      </section>
      <section>
        <Review />
      </section>
      <section>
        <FAQ />
      </section>
      <section>
        <BrowseTitles />
      </section>
    </>
  );
};

export default ProductLayout;

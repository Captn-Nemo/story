import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "./book.css";
const LongBookPreview = ({ data }) => {
  const customRenderThumb = (children) =>
    children.map((item) => {
      return <div>{item.props.children}</div>;
    });
  return (
    <Carousel
      showIndicators={true}
      //    showThumbs={true}
      showStatus={true}
      showArrows={true}
      swipeable={true}
      renderThumbs={customRenderThumb}
    >
      {data.map((el, i) => {
        return (
          <div
            key={i}
            className="p-4 d-flex justify-content-start align-items-start text-justify longBook bgteal patrickhand f1"
          >
            {el}
          </div>
        );
      })}

      {/* <div className="d-flex justify-content-center align-items-center longBook">
        Pag2
      </div>
      <div className="d-flex justify-content-center align-items-center longBook">
        Pag2
      </div>
      <div className="d-flex justify-content-center align-items-center longBook">
        Pag2
      </div> */}
    </Carousel>
  );
};

export default LongBookPreview;

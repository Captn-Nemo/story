import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";

class BookCarousel extends Component {
  render() {
    return (
      <Carousel showIndicators={true} showStatus={false} autoPlay infiniteLoop>
        <div>
          <img src={require("../assets/images/book-thumb.png")} alt="gallery" />
        </div>
        <div>
          <img src={require("../assets/images/book-thumb.png")} alt="gallery" />
        </div>
        <div>
          <img src={require("../assets/images/book-thumb.png")} alt="gallery" />
        </div>
        <div>
          <img src={require("../assets/images/book-thumb.png")} alt="gallery" />
        </div>
      </Carousel>
    );
  }
}

export default BookCarousel;

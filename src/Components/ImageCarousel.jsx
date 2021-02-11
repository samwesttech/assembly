import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import Bed1 from "../Assets/Assembly_Photo_1.JPG";
import Bed2 from "../Assets/Assembly_Photo_3.png";
import Bed3 from "../Assets/Assembly_Photo_4.png";

import ImageGallery from "react-image-gallery";

class ImageCarousel extends React.Component {
  render() {
    const images = [
      {
        original: Bed1,
        thumbnail: Bed1,
      },
      {
        original: Bed2,
        thumbnail: Bed2,
      },
      {
        original: Bed3,
        thumbnail: Bed3,
      },
    ];

    return <ImageGallery items={images} />;
  }
}

export default ImageCarousel;

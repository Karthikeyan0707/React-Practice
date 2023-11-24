import React from "react";
import ImageShow from "./ImageShow";
import "./ImagesList.css";

function ImagesList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });
  // return <div>imagesList:{images.length}</div>;
  return <div className="image-list">{renderedImages}</div>;
}

export default ImagesList;

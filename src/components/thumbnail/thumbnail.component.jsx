import React from "react";
import "./thumbnail.styles.scss";

const Thumbnail = ({ title, description }) => {
  return (
    <div className="thumb">
      <span className="thumb-title">{title}</span>
      <span className="thumb-description">{description}</span>
    </div>
  );
};

export default Thumbnail;

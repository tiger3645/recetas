import React from "react";
import { Link } from "react-router-dom";
import "./carousel.styles.scss";
import Thumbnail from "../thumbnail/thumbnail.component";

const Carousel = ({ recipees }) => {
  return (
    <div className="carousel">
      {recipees.map(recipee => (
        <Link key={recipee.id} to={`/recipee/${recipee.id}`}>
          <Thumbnail
            id={recipee.id}
            title={recipee.title}
            description={recipee.description}
          />
        </Link>
      ))}
    </div>
  );
};

export default Carousel;

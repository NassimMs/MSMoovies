import {Carousel} from "react-bootstrap"
import React, { useState } from "react";
import Kong from "../Ressources/Kong.jpg"
import Joker from "../Ressources/Joker.jpg"
import John from "../Ressources/John.jpg"

const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block"
            src={Kong}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Kong Vs Godzilla</h3>
            <p>The Ultimate Fight of the Century Who do you think will win ?.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={Joker}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>The Joker</h3>
            <p>The Crazy Clown is in Arkham City again ...</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={John}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>John Wick</h3>
            <p>
              How Many Kills so far John ?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
    
  
export default ControlledCarousel
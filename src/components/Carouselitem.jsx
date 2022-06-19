
import Carousel from "react-bootstrap/Carousel";
import { Shipping } from "./Shipping";
import "./css/caraousel.css";

export const Carouselitem = () => {
  

  return (
    <div>
      <Shipping />
      <div>
        <Carousel fade>
          <Carousel.Item className="carousel">
            <img
              className="d-block w-100"
              src="https://cdn.shopify.com/s/files/1/0044/9802/files/TG-Olive-Konbu-Crossbody-Collection-Hero_2808x.jpg?v=1655398252"
              alt="First slide"
            />
            <Carousel.Caption className="caption">
              <h5>BACK IN STOCK</h5>
              <h1>Natural</h1>
              <h1>Key Lanyards</h1>
              <button
                style={{
                  border: "none",
                  color: "white",
                  backgroundColor: "black",
                  padding: "10px",
                }}
              >
                shop now
              </button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel">
            <img
              className="d-block w-100"
              src="https://cdn.shopify.com/s/files/1/0044/9802/files/TG-Key-Lanyards-Collection-Hero_2808x.jpg?v=1655397756"
              alt="Second slide"
            />

            <Carousel.Caption className="caption">
              <h5>BACK IN STOCK</h5>
              <h1>Natural</h1>
              <h1>Key Lanyards</h1>
              <button
                style={{
                  border: "none",
                  color: "white",
                  backgroundColor: "black",
                  padding: "10px",
                }}
              >
                shop now
              </button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};



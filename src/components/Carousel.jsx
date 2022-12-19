import React from "react";
import Slider from "react-slick";
import { Hidden } from "@material-ui/core";
import logo1 from "../assets/imgs/logo1.jpg";
import logo2 from "../assets/imgs/logo2.jpg";
import logo3 from "../assets/imgs/logo3.jpg";
import logo4 from "../assets/imgs/logo4.jpg";
import logo5 from "../assets/imgs/logo5.jpg";
import logo1mobile from "../assets/imgs/logo1mobile.jpg";
import logo2mobile from "../assets/imgs/logo2mobile.jpg";
import logo3mobile from "../assets/imgs/logo3mobile.jpg";
import logo4mobile from "../assets/imgs/logo4mobile.jpg";
import logo5mobile from "../assets/imgs/logo5mobile.jpg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div />;
}

export default function Carousel() {
  const buttonStyle = {
    backgroundColor: "#000000",
    marginBottom: "15px",
    fontWeight: 550,
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#000000",
      }}
    >
      <Hidden xsDown>
        <Slider
          {...settings}
          style={{
            textAlign: "center",
          }}
        >
          <div>
            <div
              style={{
                background: `url(${logo2}) no-repeat center`,
                backgroundSize: "100vw 100%",
                paddingTop: "340px",
              }}
            >
              <br />
            </div>
          </div>
          <div>
            <div
              height="3vh"
              style={{
                background: `url(${logo5}) no-repeat center`,
                backgroundSize: "100vw 100%",
                paddingTop: "340px",
              }}
            >
              <br />
            </div>
          </div>
          <div>
            <div
              style={{
                background: `url(${logo4}) no-repeat center`,
                backgroundSize: "100vw 100%",
                paddingTop: "340px",
              }}
            >
              <br />
            </div>
          </div>
          <div>
            <div
              style={{
                background: `url(${logo3}) no-repeat center`,
                backgroundSize: "100vw 100%",
                paddingTop: "340px",
              }}
            >
              <br />
            </div>
          </div>
          <div>
            <div
              style={{
                background: `url(${logo1}) no-repeat center`,
                backgroundSize: "100vw 100%",
                paddingTop: "340px",
              }}
            >
              <br />
            </div>
          </div>
        </Slider>
      </Hidden>
      <Hidden smUp>
        <Slider
          {...settings}
          style={{
            textAlign: "center",
          }}
        >
          <div>
            <div
              style={{
                background: `url(${logo1mobile}) no-repeat center`,
                backgroundSize: "100vw 100%",
                paddingTop: "280px",
              }}
            >
              <br />
            </div>
          </div>
          <div>
            <div
              style={{
                background: `url(${logo4mobile}) no-repeat center`,
                backgroundSize: "100vw 100%",
                paddingTop: "280px",
              }}
            >
              <br />
            </div>
          </div>
          <div>
            <div
              style={{
                background: `url(${logo3mobile}) no-repeat center`,
                backgroundSize: "100vw 100%",
                paddingTop: "280px",
              }}
            >
              <br />
            </div>
          </div>
          <div>
            <div
              style={{
                background: `url(${logo2mobile}) no-repeat center`,
                backgroundSize: "100vw 100%",
                paddingTop: "280px",
              }}
            >
              <br />
            </div>
          </div>
          <div>
            <div
              style={{
                background: `url(${logo5mobile}) no-repeat center`,
                backgroundSize: "100vw 100%",
                paddingTop: "280px",
              }}
            >
              <br />
            </div>
          </div>
        </Slider>
      </Hidden>
    </div>
  );
}

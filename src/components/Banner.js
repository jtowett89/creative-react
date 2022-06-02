import { React, useEffect, useState } from "react";
import BannerImg from "../images/banner-img.png";

const Banner = () => {
  const [menteePics, setMenteePics] = useState([]);
  const [done, setDone] = useState(false);

  const populate = () => {
    let zIndex = 0,
      imageString = "";

    for (let i = 0; i < 5; i++) {
      let userUrl =
        menteePics[Math.floor(Math.random() * menteePics.length - 1)]
          .avatar_url;
      imageString += `<img style="z-index:${zIndex}" src="${userUrl}" />`;
      zIndex++;
    }
    document.getElementById("mentees-images").innerHTML = imageString;
    setDone(true);
  };
  const fetchPics = () => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => {
        setMenteePics(data);
      });
  };

  menteePics.length > 5 && !done && populate();

  useEffect(fetchPics, []);
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h1 className="banner-heading">
              Improve your creative skills like a boss
            </h1>
            <p className="banner-tagline">
              We provide you with a lot of practical lessons that are really
              needed and match the creative industry
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <a className="banner-btn">Browse Class</a>
              <span
                className="banner-mentees-images"
                id="mentees-images"
              ></span>
              <span className="banner-mentees">162,891 mentees</span>
            </div>
          </div>
          <div className="col-md-5">
            <img src={BannerImg} className="mt-5 img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;

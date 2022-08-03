import { React } from "react";

const Courses = () => {
  return (
    <>
      <section className="courses">
        <h2 className="courses-heading-small text-center mb-3">
          Trending Courses
        </h2>
        <h1 className="courses-heading text-center mb-5">
          Our top rated courses
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-5 mt-3">
              <div className="my-card">
                <div className="course-img-container">
                  <div className="course-img-1 mb-2"></div>
                </div>

                <h1 className="course-heading">
                  Digital Imaging using Photoshop
                </h1>
                <h2 className="price">$25.55</h2>
                <span className="videos">
                  <i className="fa fa-play"></i> 30 Videos
                </span>
                <span className="rate">
                  <i className="fa fa-star"></i> 4.8 Rate
                </span>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-5 mt-3">
              <div className="my-card">
                <div className="course-img-container">
                  <div className="course-img-2 mb-2"></div>
                </div>
                <h1 className="course-heading">
                  Advanced Prototyping in Figma
                </h1>
                <h2 className="price">$25.55</h2>
                <span className="videos">
                  <i className="fa fa-play"></i> 30 Videos
                </span>
                <span className="rate">
                  <i className="fa fa-star"></i> 4.8 Rate
                </span>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-5 mt-3">
              <div className="my-card">
                <div className="course-img-container">
                  <div className="course-img-3 mb-2"></div>
                </div>
                <h1 className="course-heading">
                  User Interface Design for Developer
                </h1>
                <h2 className="price">$25.55</h2>
                <span className="videos">
                  <i className="fa fa-play"></i> 30 Videos
                </span>
                <span className="rate">
                  <i className="fa fa-star"></i> 4.8 Rate
                </span>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-5 mt-3">
              <div className="my-card">
                <div className="course-img-container">
                  <div className="course-img-4 mb-2"></div>
                </div>
                <h1 className="course-heading">
                  Flat Illustartion for Beginners
                </h1>
                <h2 className="price">$25.55</h2>
                <span className="videos">
                  <i className="fa fa-play"></i> 30 Videos
                </span>
                <span className="rate">
                  <i className="fa fa-star"></i> 4.8 Rate
                </span>
              </div>
            </div>
            <p className="courses-btn-container mt-5 mb-5">
              <a href="#">
                <button className="courses-btn mx-auto">See All Courses</button>
              </a>
            </p>
          </div>
        </div>
      </section>
      <div className="clearfix"></div>
    </>
  );
};

export default Courses;

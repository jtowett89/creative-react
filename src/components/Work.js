import { React } from "react";

const Work = () => {
  return (
    <>
      <section className="work">
        <h2 className="courses-heading-small text-center mb-3">Showcase</h2>
        <h1 className="courses-heading text-center mb-5 col-md-6 offset-md-3">
          Final work created by our mentees
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-5 mt-3">
              <div className="my-card">
                <div className="work-img-1 mb-2"></div>
                <h1 className="work-heading">Anastacia Newmann</h1>
                <p className="mentee-role">3D Character Design</p>
              </div>
            </div>
            <div className="col-md-4 mb-5 mt-3">
              <div className="my-card">
                <div className="work-img-2 mb-2"></div>
                <h1 className="work-heading">Silver Manch</h1>
                <p className="mentee-role">Photography for Beginner</p>
              </div>
            </div>
            <div className="col-md-4 mb-5 mt-3">
              <div className="my-card">
                <div className="work-img-3 mb-2"></div>
                <h1 className="work-heading">Andrew Garic</h1>
                <p className="mentee-role">Digital Image using Photoshop</p>
              </div>
            </div>

            <p className="courses-btn-container mt-5 mb-5">
              <a href="#">
                <button className="courses-btn mx-auto">See Showcase</button>
              </a>
            </p>
          </div>
        </div>
      </section>
      <div className="clearfix"></div>
    </>
  );
};

export default Work;

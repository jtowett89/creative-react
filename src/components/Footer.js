import { React } from "react";
const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <a className="navbar-brand pt-0" href="/">
              crea.
            </a>
            <p>
              Online education platform for creative people around the world
            </p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2 mt-2">
            <h2 className="mb-2">Company</h2>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 mt-2">
            <h2 className="mb-2">Follow Us</h2>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Youtube</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mt-2">
            <h2 className="mb-2">More</h2>
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Become a Member</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <p className="text-center mt-5 copyright">
            &copy; 2022 Crea Education Team. All Rights Reserved.
            <br />
            Developed by{" "}
            <a target="_blank" href="https://justice.zerone.co.ke">
              Justice
            </a>
            . Designed by{" "}
            <a target="_blank" href="https://www.instagram.com/rezha.aaron/">
              Rezha
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Footer;

import React from "react";

const Footer = props => {
  return (
    <footer className="footer section text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="social-media">
              <li>
                <a href="">
                  <i className="fa fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-pinterest" />
                </a>
              </li>
            </ul>
            <p className="copyright-text">Copyright &#9400; Fashion</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { Component } from "react";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

const SocialShare = [
  { Social: <FaGithub />, link: "https://github.com/deus-labs" },
  { Social: <FaTwitter />, link: "https://twitter.com/deuslabs" },
  // {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
  // {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
];

class Footer extends Component {
  aboutOnClick = (e) => {
    e.preventDefault();
    document.getElementById("about-section").scrollIntoView();
  };

  servicesOnClick = (e) => {
    e.preventDefault();
    document.getElementById("services-section").scrollIntoView();
  };

  render() {
    return (
      <React.Fragment>
        <footer className="footer-area">
          <div className="footer-wrapper">
            <div className="row align-items-end row--0">
              <div className="col-lg-12">
                <div className="footer-right" data-black-overlay="6">
                  <div className="row">
                    {/* Start Single Widget  */}
                    <div className="col-lg-6 col-sm-6 col-12">
                      <div className="footer-link">
                        <h4>Quick Links</h4>
                        <ul className="ft-link">
                          <li>
                            <div onClick={this.aboutOnClick}>About</div>
                          </li>
                          <li>
                            <div onClick={this.servicesOnClick}>Services</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End Single Widget  */}
                    {/* Start Single Widget  */}
                    <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                      <div className="footer-link">
                        <h4>Contact Us</h4>
                        <ul className="ft-link">
                          <li>
                            <a href="mailto:admin@example.com">
                              info@deuslabs.fi
                            </a>
                          </li>
                        </ul>

                        <div className="social-share-inner">
                          <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                            {SocialShare.map((val, i) => (
                              <li key={i}>
                                <a href={`${val.link}`}>{val.Social}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Single Widget  */}

                    <div className="col-lg-12">
                      <div className="copyright-text">
                        <p>Copyright © 2021 deus labs. All Rights Reserved.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
export default Footer;

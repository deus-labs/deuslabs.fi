import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="about-wrapper">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-7 col-md-12">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title">Who we are?</h2>
                    <p className="description">
                      We are deuslabs. deuslabs was formed by talented
                      individuals with varied backgrounds intersecting tech,
                      economy, art, and a combination thereof.
                    </p>
                    <p className="description">
                      We believe
                      blockchain technology will not only revolutionise the
                      world but also our minds: To create things of incredible
                      importance and value, to expand our ability to achieve so.
                    </p>
                    <p className="description">
                      We devoted our minds to realizing these dreams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default About;

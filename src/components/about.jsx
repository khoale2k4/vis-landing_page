import React from "react";
import SlideInView from "./slide_view.tsx"

export const About = (props) => {
  return (
    <SlideInView
      direction="bot2top"
      width="100%"
      delay={0.5}
      duration={0.8}>
      <div id="about">
        <div className="container">
          <div className="row">

            <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/about.jpg" className="img-responsive" alt="" />
              {" "}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>ABOUT US</h2>
                <p>{props.data ? props.data.paragraph : "loading..."}</p>
                <h3>Why choose us?</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {props.data
                        ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                        : "loading"}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {props.data
                        ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                        : "loading"}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideInView>
  );
};

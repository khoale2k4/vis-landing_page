import React from "react";
import SlideInView from "./slide_view.tsx"

export const Team = (props) => {
  return (
    <SlideInView
      direction="bot2top"
      width="100%"
      delay={0.5}
      duration={0.8}>
      <div id="team" className="text-center">
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Meet the Team</h2>
            <p>
              Gặp gỡ những chuyên gia hàng đầu, đầy nhiệt huyết và sáng tạo, là những người đứng sau thành công của các dự án và giải pháp công nghệ mà chúng tôi mang đến.
            </p>
          </div>
          <div id="row">
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
              : "loading"}
          </div>
        </div>
      </div>
    </SlideInView>
  );
};

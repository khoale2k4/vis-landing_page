import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p>
          Chúng tôi cung cấp các dịch vụ công nghệ toàn diện, từ tư vấn, phát triển phần mềm, chuyển đổi số đến bảo trì, đào tạo và bảo mật, giúp doanh nghiệp tối ưu hóa hoạt động và phát triển bền vững.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};

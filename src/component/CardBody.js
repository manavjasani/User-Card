import { GlobalOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import React from "react";

const CardBody = ({ comp }) => {
  return (
    <div className="card-body">
      <h3 className="mt-0">{comp.name}</h3>
      <div className="card-body_part">
        <span className="card-body_icon">{<MailOutlined />}</span>
        <span className="ml-10">{comp.email}</span>
      </div>
      <div className="card-body_part">
        <span className="card-body_icon">{<PhoneOutlined />}</span>
        <span className="ml-10">{comp.phone}</span>
      </div>
      <div className="card-body_part">
        <span className="card-body_icon">{<GlobalOutlined />}</span>
        <span className="ml-10">{comp.website}</span>
      </div>
    </div>
  );
};

export default CardBody;

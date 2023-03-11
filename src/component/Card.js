import React, { useState } from "react";
import { Col, Row, Avatar, Card } from "antd";
import {
  DeleteFilled,
  EditOutlined,
  EllipsisOutlined,
  GlobalOutlined,
  HeartFilled,
  HeartOutlined,
  MailOutlined,
  PhoneOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import CardCoverImage from "./CardCoverImage";
import Paragraph from "antd/es/skeleton/Paragraph";
import "../css/style.css";
const { Meta } = Card;

const CardComponent = ({ comp, deleteUserHandler }) => {
  const [like, setLike] = useState(false);
  const [userId, setUserId] = useState("");

  const likeToggleHandler = (id) => {
    setLike(true);
    setUserId(id);
  };

  const unLikeToggleHandler = () => {
    setLike(false);
    setUserId("");
  };

  return (
    <Col
      key={comp.id}
      className="gutter-row"
      xs={24}
      sm={24}
      md={8}
      lg={8}
      xl={6}
    >
      <Card
        cover={<CardCoverImage comp={comp} className="cover_image" />}
        actions={[
          userId !== comp.id ? (
            <HeartOutlined
              className="like_btn card-footer_icon"
              onClick={() => likeToggleHandler(comp.id)}
            />
          ) : (
            <HeartFilled
              className="like_btn card-footer_icon"
              onClick={unLikeToggleHandler}
            />
          ),
          <DeleteFilled
            className="card-footer_icon"
            onClick={() => deleteUserHandler(comp.id)}
          />,
        ]}
        className="card_container"
      >
        <div className="card-body">
          <h3 className="mt-0">{comp.name}</h3>
          <div>
            <span className="card-body_icon">{<MailOutlined />}</span>
            <span className="ml-10">{comp.email}</span>
          </div>
          <div>
            <span className="card-body_icon">{<PhoneOutlined />}</span>
            <span className="ml-10">{comp.phone}</span>
          </div>
          <div>
            <span className="card-body_icon">{<GlobalOutlined />}</span>
            <span className="ml-10">{comp.website}</span>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default CardComponent;

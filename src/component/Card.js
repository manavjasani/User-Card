import React, { useState } from "react";
import { Col, Card } from "antd";
import { DeleteFilled, HeartFilled, HeartOutlined } from "@ant-design/icons";
import CardCoverImage from "./CardCoverImage";
import CardBody from "./CardBody";

const CardComponent = ({ comp, deleteUserHandler }) => {
  const [userId, setUserId] = useState("");

  const likeToggleHandler = (id) => {
    setUserId(id);
  };

  const unLikeToggleHandler = () => {
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
        <CardBody comp={comp} />
      </Card>
    </Col>
  );
};

export default CardComponent;

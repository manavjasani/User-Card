import React from "react";
import { Col, Row, Avatar, Card } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import CardCoverImage from "./CardCoverImage";
import Paragraph from "antd/es/skeleton/Paragraph";
const { Meta } = Card;

const CardComponent = ({ comp }) => {
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
        style={{
          margin: "15px",
        }}
        cover={<CardCoverImage comp={comp} />}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          //   avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    </Col>
  );
};

export default CardComponent;

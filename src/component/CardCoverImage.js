import React from "react";

const CardCoverImage = ({ comp }) => {
  return (
    <img
      style={{ height: "180px" }}
      alt="example"
      src={`https://avatars.dicebear.com/v2/avataaars/${comp.username}.svg?options[mood][]=happy`}
    />
  );
};

export default CardCoverImage;

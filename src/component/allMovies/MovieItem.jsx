import React from "react";
import imgSrc from "../../helper/image";

export default function MovieItem({ data }) {
  return (
    <div>
      <div>
        <img src={imgSrc(data.poster_path, "w500")} />
      </div>
      <div
        style={{
          color: "white",
          fontSize: "24px",
          position: "absolute",
          left: "15px",
          bottom: "15px",
        }}
      >
        {data.title}
      </div>
    </div>
  );
}

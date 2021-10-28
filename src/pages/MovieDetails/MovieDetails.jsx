import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import imgSrc from "../../helper/image";
import { Progress } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getdetail } from "../../Redux/detail/detail-actions";

export default function MovieDetails() {
  const params = useParams();
  const detailData = useSelector((state) => state.detail.moviedetail);
  console.log(params.id);
  // const [posts, setposts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=51530e9ac50c0ed2a588fbf229874c11`
    )
      .then((r) => r.json())
      .then((data) => {
        // setposts(data);
        dispatch(getdetail(data));
        // console.log(data);
      });
  }, [params.id]);

  return (
    <div>
      <div style={{ padding: "20px 50px 0 100px" }}>
        <img src={imgSrc(detailData.poster_path, "w500")} />
        <h1 style={{ color: "black" }}>{detailData.title}</h1>
        <h3 style={{ color: "black" }}>{detailData.status}</h3>
        <h3 style={{ color: "black" }}>{detailData.release_date}</h3>
        {/* <h3 style={{ color: "black" }}>{posts.popularity}</h3> */}
        <Progress type="circle" percent={Math.round(detailData.popularity)} />
      </div>
    </div>
  );
}

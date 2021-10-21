import React from "react";
import useMovieDB from "../../hooks/useMovieDB";
import MovieItem from "./MovieItem";
import { Row, Col } from "antd";

export default function Moviess() {
  const { data, loading } = useMovieDB("movie/top_rated");
  console.log(data);
  return data ? (
    <div style={{ marginTop: 70 }}>
      <Row>
        {data?.results?.map((item) => (
          <Col span={8}>
            <MovieItem data={item} />
          </Col>
        ))}
      </Row>
    </div>
  ) : (
    <h1>Loading</h1>
  );
}

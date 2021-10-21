import Style from "./Home.module.scss";
import PopMoviesSlider from "../../component/PopMoviesSlider/PopMoviesSlider";
import Moviess from "../../component/allMovies/Moviess";

export default function Home() {
  return (
    <div className={Style.container}>
      <PopMoviesSlider />
      <Moviess />
    </div>
  );
}

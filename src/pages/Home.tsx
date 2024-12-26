import HomeLeft from "../sections/HomeLeft/HomeLeft";
import { HomeRight } from "../sections/projects/HomeRight/HomeRight";
import Aos from "aos";

export function Home() {
  Aos.init({
    duration: 2000,
  });

  return (
    <>
      {/* data-aos="fade-up" */}
      <div className="d-md-flex h-100">
        <HomeLeft />
        <HomeRight />
      </div>
    </>
  );
}

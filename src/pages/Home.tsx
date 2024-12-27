import HomeLeft from "../sections/HomeLeft/HomeLeft";
import { HomeRight } from "../sections/projects/HomeRight/HomeRight";
import Aos from "aos";
import { handleOverflow } from "../utils/handle-overflow";
import { useEffect } from "react";

export function Home() {
  window.addEventListener("resize", handleOverflow);
  useEffect(handleOverflow, []);

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

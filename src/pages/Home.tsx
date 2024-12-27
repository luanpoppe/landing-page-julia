import HomeLeft from "../sections/HomeLeft/HomeLeft";
import { HomeRight } from "../sections/projects/HomeRight/HomeRight";
import Aos from "aos";
import { handleOverflow } from "../utils/handle-overflow";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function Home() {
  const location = useLocation();

  window.removeEventListener("resize", () => handleOverflow(location.pathname));
  window.addEventListener("resize", () => handleOverflow(location.pathname));
  useEffect(() => handleOverflow(location.pathname), []);

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

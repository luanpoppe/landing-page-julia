import HomeLeft from "../sections/HomeLeft/HomeLeft";
import { HomeRight } from "../sections/projects/HomeRight/HomeRight";
import { useCustomLoadPage } from "../utils/custom-hooks";

export function Home() {
  useCustomLoadPage();

  return (
    <>
      <div className="d-md-flex h-100">
        <HomeLeft />
        <HomeRight />
      </div>
    </>
  );
}

import { Link } from "react-router-dom";
import { mainColors } from "../../utils/colors";
import { useLocation } from "react-router-dom";
import { RedirectionButtons } from "../RedirectionButtons";
import { ProfileImage } from "../../components/ProfileImage";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { MenuMobile } from "../../components/MenuMobile";
import { HomeContactButtons } from "./HomeContactButtons";

const HomeLeftStyled = styled.section`
  background-color: ${mainColors.purple};
  color: ${mainColors.whiteLetters};
  padding: 40px;
  margin-bottom: 24px;
  width: 35%;
  height: 100%;
  min-height: 100vh;

  @media (max-width: 767px) {
    min-height: 75%;
    height: 75%;
    width: 100%;
    margin-bottom: 24px;
  }

  @media (min-width: 768px) {
    margin-bottom: 0px;
    position: fixed;
    top: 0;
    left: 0;
  }
`;

function HomeLeft() {
  const location = useLocation();
  const path = location.pathname;
  function isHomeOrContact() {
    if (path == "/") {
      return "home";
    } else if (path == "/contact") {
      return "contact";
    }
  }

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  function handleOpenMenu() {
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden";
  }

  return (
    <HomeLeftStyled className="col-12 col-lg-4 y-lg-hidden" id="left-home">
      <div className="d-flex flex-column justify-content-between align-items-center">
        <MenuMobile
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          isHomeOrContact={isHomeOrContact}
        />
        <nav className="d-flex justify-content-between w-100 d-md-none">
          <Link to={"/"}>
            <h5>Julia</h5>
          </Link>
          <FiMenu size={24} onClick={handleOpenMenu} className="clickable" />
        </nav>

        <div
          className="d-flex flex-column justify-content-start align-items-center hidden"
          style={{ height: "80vh" }}
        >
          <ProfileImage />

          <RedirectionButtons />

          <h1 className="mb-4">Julia</h1>
          <div className="text-center mb-4">
            I am passionate about using my creativity to tackle challenges. I
            have a 7-year career in Graphic Design and Web Design and am
            currently specializing and seeking an opportunity in the UX/UI
            Design field.
          </div>
        </div>

        <div className="d-none d-md-block">
          <HomeContactButtons
            isHomeOrContact={isHomeOrContact}
            isMenuOpen={isMenuOpen}
          />
        </div>
      </div>
    </HomeLeftStyled>
  );
}

export default HomeLeft;

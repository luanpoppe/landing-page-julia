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

  @media (min-width: 992px) {
    margin-bottom: 0px;
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
    <HomeLeftStyled
      className="col-12 col-lg-4 d-flex flex-column justify-content-between align-items-center"
      id="left-home"
    >
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

      <div className="d-flex flex-column justify-content-center align-items-center hidden">
        <ProfileImage />
        <RedirectionButtons />
        <h1 style={{ marginBottom: "22px" }}>Julia</h1>
        <div style={{ marginBottom: "60px", textAlign: "center" }}>
          I am passionate about using my creativity to tackle challenges. I have
          a 7-year career in Graphic Design and Web Design and am currently
          specializing and seeking an opportunity in the UX/UI Design field.
        </div>
      </div>

      <div className="d-none d-md-block">
        <HomeContactButtons
          isHomeOrContact={isHomeOrContact}
          isMenuOpen={isMenuOpen}
        />
      </div>
    </HomeLeftStyled>
  );
}

export default HomeLeft;

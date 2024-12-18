import { Link } from "react-router-dom";
import { mainColors } from "../utils/colors";
import { useLocation } from "react-router-dom";
import { RedirectionButtons } from "./RedirectionButtons";

const profilePictureSize = "145px";

function HomeLeft() {
  const location = useLocation();
  const path = location.pathname;
  console.log("path: ", path);
  function isHomeOrContact() {
    if (path == "/") {
      return "home";
    } else if (path == "/contact") {
      return "contact";
    }
  }

  return (
    <section
      style={{
        backgroundColor: mainColors.purple,
        color: mainColors.whiteLetters,
        padding: "40px",
      }}
      className="col-4 d-flex flex-column justify-content-between align-items-center h-100"
      id="left-home"
    >
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div>
          <img
            src="https://storage.googleapis.com/uxfolio/66e0c774b0349900027d9a16/portfolios/078b3ec3-5259-4c0d-b4a5-bc73c915c215/Fk1oLRDzOW6vZzuR.jpeg"
            alt="Profile Picture"
            style={{
              width: profilePictureSize,
              height: profilePictureSize,
              borderRadius: "50%",
              marginBottom: "40px",
            }}
          />
        </div>
        <RedirectionButtons />
        <h1 style={{ marginBottom: "22px" }}>Julia</h1>
        <div style={{ marginBottom: "60px", textAlign: "center" }}>
          I am passionate about using my creativity to tackle challenges. I have
          a 7-year career in Graphic Design and Web Design and am currently
          specializing and seeking an opportunity in the UX/UI Design field.
        </div>
      </div>

      <div>
        <div className="d-flex justify-content-center" style={{ gap: "32px" }}>
          <Link to={"/"}>
            <div
              style={isHomeOrContact() == "home" ? { fontWeight: "700" } : {}}
            >
              Home
            </div>
          </Link>
          <Link
            to={"/contact"}
            style={isHomeOrContact() == "contact" ? { fontWeight: "700" } : {}}
          >
            <div>Contact</div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeLeft;

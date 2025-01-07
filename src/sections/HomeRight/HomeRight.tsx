import { Link } from "react-router-dom";
import { mainColors } from "../../utils/colors";
import styled from "styled-components";

const HomeRightStyled = styled.section`
  max-width: 1248px;
  padding: 5%;
  margin: 0;
  /* width: 65%; */

  @media (min-width: 992px) {
    padding: 108px 5%;
  }

  @media (max-width: 768px) {
    padding: 2%;
  }
`;

const ProjectStyles = styled(Link)`
  @media (min-width: 992px) and (max-width: 1199px) {
    margin-bottom: 120px;
  }
`;

export function HomeRight() {
  return (
    <HomeRightStyled
      className="container overflow-y-scroll overflow-x-hidden text-center row g-4 flex-column aling-items-center flex-xl-row"
      id="right-home"
    >
      <ProjectStyles
        className="hidden col-12 col-xl-6 h-100"
        to={"/project/sanar"}
      >
        <div style={{ color: mainColors.blackLetters }}>
          <img
            src="./home-picture-1.png"
            alt="Project Sanar"
            className="grow-on-hover"
            style={
              {
                // width: "100%",
                // maxWidth: "400px",
                // maxHeight: "390px",
              }
            }
          />
          <div className="d-flex flex-column align-items-center justify-content-center">
            <h4
              className="font-varela-round text-center"
              style={{ paddingTop: "22px", width: "80%" }}
            >
              Rebranding for all Sanar's Landing Pages - Click to see more!
            </h4>
            <div>2023</div>
          </div>
        </div>
      </ProjectStyles>
      <ProjectStyles
        className="hidden col-12 col-xl-6 h-100"
        to={"/project/shopping-center"}
      >
        <div style={{ color: mainColors.blackLetters }}>
          <img
            src="./home-picture-2.png"
            alt="Project navigation for shopping centers"
            className="grow-on-hover"
            style={
              {
                // maxWidth: "400px",
                // maxHeight: "390px",
              }
            }
          />
          <div className="d-flex flex-column align-items-center justify-content-center">
            <h4
              className="font-varela-round text-center"
              style={{ paddingTop: "22px", width: "80%" }}
            >
              Navigation app for shopping centers - Click to see more!
            </h4>
            <div>2024</div>
          </div>
        </div>
      </ProjectStyles>
    </HomeRightStyled>
  );
}

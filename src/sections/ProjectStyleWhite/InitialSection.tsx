import styled from "styled-components";
import { mainColors } from "../../utils/colors";
import { ProfileHeader } from "../projects/ProfileHeader";

const InitialSectionSyled = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 30px;

  @media (min-width: 992px) {
    font-size: 40px;
    font-weight: 500;
    line-height: 50px;
  }
`;

const TitleAndImageStyled = styled.section`
  max-height: 100vh;

  @media (min-width: 992px) {
    max-height: 50vh;
  }
`;

export function InitialSection() {
  return (
    <InitialSectionSyled className="projects-paddings">
      <div
        style={{
          paddingBottom: "8%",
          maxWidth: "1188px",
          color: `${mainColors.blackLetters}`,
        }}
      >
        <ProfileHeader color={mainColors.blackLetters} />

        <TitleAndImageStyled className="d-flex flex-column flex-lg-row align-items-center gap-5 mt-4 mt-lg-5">
          <div
            className="col-12 col-lg-8 font-varela-round"
            style={{ fontSize: "inherit", lineHeight: "inherit" }}
          >
            Navigation app for shopping centers
            <span
              className="d-block mt-3"
              style={{
                fontSize: "16px",
                fontWeight: "regular",
                color: "rgb(107, 107, 107)",
                lineHeight: "initial",
              }}
            >
              UX/UI Design case study for EBAC - user researching and
              prototyping
            </span>
          </div>
          <div className="col-12 col-lg-4 d-flex justify-content-center">
            <img
              src="../imagem-projeto-shopping-center.png"
              alt="Sopping Center Image"
            />
          </div>
        </TitleAndImageStyled>
      </div>
    </InitialSectionSyled>
  );
}

import styled from "styled-components";
import { mainColors } from "../../utils/colors";
import { ProfileHeader } from "../projects/ProfileHeader";
import { ProjectImage } from "./ProjectImage";

const BlackSectionSyled = styled.section`
  display: flex;
  justify-content: center;
  background-color: ${mainColors.blackBackground};
  width: 100%;
  font-size: 30px;

  @media (min-width: 992px) {
    font-size: 40px;
    font-weight: 500;
    line-height: 50px;
  }
`;

const TitleAndImageStyled = styled.section`
  color: ${mainColors.whiteLetters};
  max-height: 100vh;

  @media (min-width: 992px) {
    max-height: 50vh;
  }
`;

export function BlackSection() {
  return (
    <BlackSectionSyled className="projects-paddings w-100">
      <div
        style={{
          paddingBottom: "8%",
          maxWidth: "1188px",
        }}
      >
        <ProfileHeader />

        <TitleAndImageStyled className="d-flex flex-column flex-lg-row align-items-center gap-5 mt-4 mt-lg-5 hidden">
          <div
            className="col-12 col-lg-6 font-varela-round"
            style={{ fontSize: "inherit", lineHeight: "inherit" }}
          >
            Rebranding for all of Sanar's Landing Pages in post-graduation
            courses
            <span
              className="d-block mt-3 mt-lg-0"
              style={{ fontSize: "16px", fontWeight: "regular" }}
            >
              2023
            </span>
          </div>
          <div className="col-12 col-lg-6">
            <ProjectImage />
          </div>
        </TitleAndImageStyled>
      </div>
    </BlackSectionSyled>
  );
}

import { Link } from "react-router-dom";
import { mainColors } from "../../utils/colors";
import { HorizontalProjectSection } from "../projects/HorizontalProjectSection";
import { WhiteImageSection } from "./WhiteImageSection";
import styled from "styled-components";
import { Row3Images } from "./Row3Images";

const Personas = styled(HorizontalProjectSection)`
  width: 100%;
  @media (min-width: 992px) {
    width: 60%;
  }
`;

const RowImage = styled.div`
  width: 100%;
  @media (min-width: 992px) {
    width: 45%;
  }
`;

const EmailSize = styled.h1`
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 20px;

  @media (max-width: 360px) {
    font-size: 18px;
  }
`;

export function WhiteSection() {
  return (
    <section
      className="d-flex flex-column projects-paddings"
      style={{
        backgroundColor: mainColors.white,
      }}
    >
      <HorizontalProjectSection className="d-flex flex-column flex-lg-row gap-4">
        <div className="col-12 col-lg-6">
          <h3 style={{ marginBottom: "20px" }}>Overview</h3>
          Sanar is a large company that offers courses for doctors. Each
          post-graduation course had its page, but as we had many teams for each
          one, these pages were becoming disconnected from the main brand and
          had different layouts.
        </div>
        <div className="col-12 col-lg-6">
          <h3 style={{ marginBottom: "20px" }}>Goal</h3>
          The main objective was to create a unified layout that could connect
          all pages and make it easier to create new pages as new courses were
          developed. As users switched between course pages, it was noticeable
          that they were all about the same product. The ultimate goal was to
          increase subscriptions by 10%.
        </div>
      </HorizontalProjectSection>

      <HorizontalProjectSection className="d-flex flex-column flex-lg-row gap-3 ga-lg-0">
        <div style={{ marginRight: "96px" }}>
          <h5>Role</h5>
          <p>Rebrand 50 Landing Pages</p>
        </div>
        <div style={{ marginRight: "96px" }}>
          <h5>Tools</h5>
          <p>Miro, Hubspot, and Adobe Suite</p>
        </div>
        <div style={{ marginRight: "96px" }}>
          <h5>Team</h5>
          <p>1 UI designer and 1 UX writer</p>
        </div>
        <div style={{ marginRight: "96px" }}>
          <h5>Timeline</h5>
          <p>1 month</p>
        </div>
      </HorizontalProjectSection>

      <div
        style={{
          backgroundColor: "rgb(250, 250, 250)",
          borderRadius: "8px",
          boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.05)",
        }}
      >
        <HorizontalProjectSection className="d-flex justify-content-around flex-wrap">
          <Row3Images />
        </HorizontalProjectSection>
      </div>

      <Personas>
        <h3 style={{ marginBottom: "20px" }}>Personas</h3>
        <p>
          We had various courses, each catering to different personas. It wasn't
          feasible to work on personas for all 15 courses. So, we identified a
          common thread - all our target audience were busy doctors looking for
          short courses to enhance their skills. After this discovery, we
          simplified our design process, creating a minimalist and
          straightforward approach.
        </p>
      </Personas>

      <HorizontalProjectSection>
        <div
          className="d-flex flex-column flex-lg-row align-items-center gap-5"
          style={{ maxWidth: "100%" }}
        >
          <div className="col-12 col-lg-6">
            <h3 style={{ marginBottom: "20px" }}>A/B tests</h3>
            <p>
              We tested 2-3 pages each week, focusing on the ones with low
              conversion rates. We made changes to the header image, button
              colors, and information, but we only made one change at a time to
              see what was impacting the results. Additionally, we used heat
              maps to understand the user journey on our pages. All of this data
              was recorded and discussed with the team.
            </p>
          </div>
          <RowImage>
            <WhiteImageSection />
            <div className="d-block text-center" style={{ marginTop: "20px" }}>
              <em>Landing Page to download an extra material</em>
            </div>
          </RowImage>
        </div>
      </HorizontalProjectSection>

      <Personas>
        <h3 style={{ marginBottom: "24px" }}>Learnings</h3>
        <p>
          It was my first time dealing with such a large number of pages at
          once. This experience taught me a lot about responsibility and helped
          me develop new skills, especially in UI design. Since there was no
          UX/UI specialist on the team, we cooperated effectively to find
          solutions. As a result, we managed to significantly improve the
          conversion rate on some of the pages.
        </p>
      </Personas>

      <HorizontalProjectSection className="d-flex flex-column align-items-center">
        <h3 className="mb-5">Read more of my case studies</h3>
        <div style={{ maxWidth: "150px" }}>
          <Link to={""}>
            <img
              style={{ maxWidth: "150px", maxHeight: "150px" }}
              src="../home-picture-2.png"
              alt="Project navigation for shopping centers"
            />
            <p style={{ marginTop: "30px", color: mainColors.blackLetters }}>
              Navigation app for shopping centers - Click to see more!
            </p>
          </Link>
        </div>
      </HorizontalProjectSection>

      <HorizontalProjectSection>
        <p style={{ marginBottom: "28px" }}>Get in touch</p>

        <EmailSize className="font-varela-round">
          <strong>julia.suarezf@gmail.com</strong>
        </EmailSize>

        <p style={{ marginBottom: "132px" }}>
          <em>
            (all project was translated from Portuguese to English, except for
            the images).
          </em>
        </p>
      </HorizontalProjectSection>
    </section>
  );
}

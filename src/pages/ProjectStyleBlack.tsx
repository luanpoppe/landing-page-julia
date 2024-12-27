import { PropsWithChildren, useRef, useState } from "react";
import { mainColors } from "../utils/colors";
import { ProfileHeader } from "../sections/projects/ProfileHeader";
import { Link } from "react-router-dom";
import { FaArrowUpLong } from "react-icons/fa6";
import styled from "styled-components";
import { BlackSection } from "../sections/ProjectStyleBlack/BlackSection";

type Props = PropsWithChildren & {
  tituloDoProjeto: string;
};

const ProjectStyleBlackStyled = styled.main`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  min-width: 100vw;
`;

export function ProjectStyleBlack(props: Props) {
  const { tituloDoProjeto } = props;
  const [buttonShouldAppear, setButtonShouldAppear] = useState(false);

  document.title = tituloDoProjeto;

  const buttonScrollTop = useRef<HTMLDivElement>(null);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) setButtonShouldAppear(true);
    else setButtonShouldAppear(false);
  });

  function clickButtonScrollTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <ProjectStyleBlackStyled>
      <BlackSection />
      {/* <WhiteSection /> */}

      {/* <div
        ref={buttonScrollTop}
        onClick={clickButtonScrollTop}
        className="transition d-flex justify-content-center align-items-center"
        style={{
          backgroundImage:
            "https://uxfol.io/dist/src/assets/images/icon-left..svg",
          backgroundColor: "rgba(53, 55, 56, 0.1)",
          width: "64px",
          height: "64px",
          borderRadius: "100%",
          position: "fixed",
          bottom: "5%",
          right: "2%",
          cursor: "pointer",
          opacity: buttonShouldAppear ? "1" : "0",
        }}
      >
        <FaArrowUpLong color="white" size={20} />
      </div> */}
    </ProjectStyleBlackStyled>
  );
}

function WhiteSection() {
  return (
    <section className="d-flex justify-content-center">
      <div
        style={{
          backgroundColor: mainColors.white,
          maxWidth: "1188px",
          // paddingLeft: "10%",
          // paddingRight: "10%",
        }}
      >
        <HorizontalDiv className="d-flex gap-4">
          <div className="col-6">
            <h3 style={{ marginBottom: "20px" }}>Overview</h3>
            Sanar is a large company that offers courses for doctors. Each
            post-graduation course had its page, but as we had many teams for
            each one, these pages were becoming disconnected from the main brand
            and had different layouts.
          </div>
          <div className="col-6">
            <h3 style={{ marginBottom: "20px" }}>Goal</h3>
            The main objective was to create a unified layout that could connect
            all pages and make it easier to create new pages as new courses were
            developed. As users switched between course pages, it was noticeable
            that they were all about the same product. The ultimate goal was to
            increase subscriptions by 10%.
          </div>
        </HorizontalDiv>

        <HorizontalDiv className="d-flex">
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
        </HorizontalDiv>

        <HorizontalDiv className="d-flex justify-content-around">
          <div>Imagem</div>
          <div>Imagem</div>
          <div>Imagem</div>
        </HorizontalDiv>

        <HorizontalDiv className="w-60">
          <h3 style={{ marginBottom: "20px" }}>Personas</h3>
          <p>
            We had various courses, each catering to different personas. It
            wasn't feasible to work on personas for all 15 courses. So, we
            identified a common thread - all our target audience were busy
            doctors looking for short courses to enhance their skills. After
            this discovery, we simplified our design process, creating a
            minimalist and straightforward approach.
          </p>
        </HorizontalDiv>

        <HorizontalDiv>
          <div
            className="d-flex align-items-center gap-5"
            style={{ maxWidth: "100%" }}
          >
            <div className="col-6">
              <h3 style={{ marginBottom: "20px" }}>A/B tests</h3>
              <p>
                We tested 2-3 pages each week, focusing on the ones with low
                conversion rates. We made changes to the header image, button
                colors, and information, but we only made one change at a time
                to see what was impacting the results. Additionally, we used
                heat maps to understand the user journey on our pages. All of
                this data was recorded and discussed with the team.
              </p>
            </div>
            <div className="col-6">
              <ProjectImage2 />
              <div
                className="d-block text-center"
                style={{ marginTop: "20px" }}
              >
                <em>Landing Page to download an extra material</em>
              </div>
            </div>
          </div>
        </HorizontalDiv>

        <HorizontalDiv className="w-60">
          <h3 style={{ marginBottom: "24px" }}>Learnings</h3>
          <p>
            It was my first time dealing with such a large number of pages at
            once. This experience taught me a lot about responsibility and
            helped me develop new skills, especially in UI design. Since there
            was no UX/UI specialist on the team, we cooperated effectively to
            find solutions. As a result, we managed to significantly improve the
            conversion rate on some of the pages.
          </p>
        </HorizontalDiv>

        <HorizontalDiv className="d-flex flex-column align-items-center">
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
        </HorizontalDiv>

        <HorizontalDiv>
          <p style={{ marginBottom: "28px" }}>Get in touch</p>

          <h1
            className="font-varela-round"
            style={{
              fontWeight: "700",
              fontSize: "30px",
              marginBottom: "20px",
            }}
          >
            <strong>julia.suarezf@gmail.com</strong>
          </h1>

          <p style={{ marginBottom: "132px" }}>
            <em>
              (all project was translated from Portuguese to English, except for
              the images).
            </em>
          </p>
        </HorizontalDiv>
      </div>
    </section>
  );
}

function HorizontalDiv({
  children,
  className,
}: React.PropsWithChildren & { className?: string }) {
  return (
    <div style={{ padding: "50px 0" }} className={className}>
      {children}
    </div>
  );
}

function ProjectImage2() {
  return (
    <svg
      style={{ maxWidth: "100%", maxHeight: "100%" }}
      fill="none"
      viewBox="0 0 2016 1730"
      height="500"
      width="2016"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1_1103_704" fill="white">
        <path d="M769 1381H1247V1676H769V1381Z"></path>
      </mask>
      <path
        d="M1244 1381V1676H1250V1381H1244ZM772 1676V1381H766V1676H772Z"
        fill="black"
        mask="url(#path-1-inside-1_1103_704)"
      ></path>

      <rect
        x="1.5"
        y="1.5"
        width="2013"
        height="1378"
        rx="30.5"
        stroke="black"
        strokeWidth="3"
      ></rect>
      <rect
        width="1920"
        height="1082"
        transform="translate(48 48)"
        fill="black"
      ></rect>
      <rect x="51" y="51" width="1914" height="1076" fill="black"></rect>
      <foreignObject
        className="mockup-screen"
        style={{ position: "relative", pointerEvents: "all" }}
        x="49"
        y="49"
        width="1918"
        height="1080"
      >
        <div
          className="wrapper"
          style={{ borderRadius: "0px", overflow: "hidden" }}
        >
          <div className="scrollable-container-mockup">
            <img
              src="https://storage.googleapis.com/uxfolio/66e0c774b0349900027d9a16/66e0c883b03499000282ef78/qkn5piZVy7ZlWpqH.jpg"
              alt="Image gallery item"
              data-zoomable=""
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectPosition: "left top",
                maxHeight: "unset",
              }}
            />
          </div>
        </div>
      </foreignObject>
      <rect
        x="770.5"
        y="1677.5"
        width="475"
        height="17"
        stroke="black"
        strokeWidth="3"
      ></rect>
    </svg>
  );
}

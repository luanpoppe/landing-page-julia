import { PropsWithChildren, useRef, useState } from "react";
import { mainColors } from "../utils/colors";
import { ProfileHeader } from "../sections/projects/ProfileHeader";
import { Link } from "react-router-dom";
import { FaArrowUpLong } from "react-icons/fa6";

type Props = PropsWithChildren & {
  tituloDoProjeto: string;
};

export function ProjectStyleWhite(props: Props) {
  const { tituloDoProjeto } = props;
  const [buttonShouldAppear, setButtonShouldAppear] = useState(false);

  document.title = tituloDoProjeto;

  const buttonScrollTop = useRef<HTMLDivElement>(null);

  window.addEventListener("scroll", () => {
    console.log("window.scrollY: ", window.scrollY);
    if (window.scrollY > 500) setButtonShouldAppear(true);
    else setButtonShouldAppear(false);
  });

  function clickButtonScrollTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <main className="d-flex flex-column">
      <InitialSection />
      <DetailsSection />

      <div
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
      </div>
    </main>
  );
}

function InitialSection() {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        color: `${mainColors.blackLetters}`,
        width: "100%",
      }}
    >
      <div
        style={{
          // paddingLeft: "10%",
          // paddingRight: "10%",
          paddingBottom: "8%",
          maxWidth: "1188px",
          color: `${mainColors.blackLetters}`,
        }}
      >
        <ProfileHeader color={mainColors.blackLetters} />

        <section
          className="d-flex align-items-center gap-5"
          style={{
            color: `${mainColors.blackLetters}`,
            maxHeight: "50vh",
            marginTop: "8%",
          }}
        >
          <div
            className="col-6 font-varela-round"
            style={{
              fontSize: "40px",
              fontWeight: "500",
              lineHeight: "50px",
            }}
          >
            Navigation app for shopping centers
            <span
              className="d-block"
              style={{ fontSize: "16px", fontWeight: "lighter" }}
            >
              UX/UI Design case study for EBAC - user researching and
              prototyping
            </span>
          </div>
          <div className="col-6">
            <img
              src="../imagem-projeto-shopping-center.png"
              alt="Sopping Center Image"
            />
          </div>
        </section>
      </div>
    </section>
  );
}

function DetailsSection() {
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
            During a <strong>UX/UI specialization</strong> course at EBAC, an
            online creative British school, I worked on a project for over{" "}
            <strong>2 years</strong>. Throughout the course, I completed tasks
            at the end of each subject, which involved conducting{" "}
            <strong>quantitative and qualitative research</strong> with various
            users, creating <strong>prototypes</strong>, and carrying out
            <strong>marketing research</strong>.
          </div>
          <div className="col-6">
            <h3 style={{ marginBottom: "20px" }}>Goal</h3>
            The primary goal of the project was to address a common issue that I
            frequently heard from friends and colleagues:{" "}
            <strong>the amount of time spent in a mall</strong> searching for
            specific stores. After conducting extensive research, I determined
            that most people visit these centers to{" "}
            <strong>
              purchase specific items or resolve particular issues
            </strong>
            , rather than simply strolling through the mall.
          </div>
        </HorizontalDiv>

        <HorizontalDiv className="d-flex">
          <div className="col-6">
            <h3 style={{ marginBottom: "20px" }}>Interview</h3>
            <p>
              After conducting basic online research on the shopping center
              market, I developed a set of questions to create a user interview
              script. I selected participants based on specific personas to
              ensure we were targeting the right audience. I conducted
              individual interviews with four people, which were recorded.
              Additionally, I created an online questionnaire and sent it to 30
              people to gather more insights for my research. During the
              interviews, I asked questions such as:
            </p>
            <ul>
              <li>Where do you live?</li>
              <li>How can you describe your routine?</li>
              <li>What are you looking for when frequenting a mall?</li>
              <li>
                What are your main frustrations when visiting these centers?
              </li>
              <li>Do you have the habit of using location apps?</li>
            </ul>
          </div>
          <div className="col-6">
            {/* <img
              className="w-100 h-100"
              src="../imagem-projeto-shopping-center-2.png"
              alt="Customer Persona"
            /> */}
            <ProjectImage />
            <div>Customer persona to help building interview script</div>
          </div>
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

function ProjectImage() {
  return (
    // style={{ maxWidth: "100%", maxHeight: "100%" }}
    // viewBox="0 0 1872 1212"
    <svg
      fill="none"
      viewBox="0 0 1872 1212"
      height="100%"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M189 74C189 48.7976 189 36.1965 193.905 26.5704C198.219 18.1031 205.103 11.219 213.57 6.90471C223.196 2 235.798 2 261 2H1611C1636.2 2 1648.8 2 1658.43 6.90471C1666.9 11.219 1673.78 18.1031 1678.1 26.5704C1683 36.1965 1683 48.7976 1683 74V1133H189V74Z"
        stroke="black"
        strokeWidth="3"
      />
      <rect
        width="1446"
        height="1030"
        transform="translate(213 62)"
        fill="black"
      />
      <rect x="216" y="65" width="1440" height="1024" fill="black" />
      <path
        d="M30 1133H1842V1146.8C1842 1164.72 1842 1173.68 1838.51 1180.53C1835.44 1186.55 1830.55 1191.44 1824.53 1194.51C1817.68 1198 1808.72 1198 1790.8 1198H81.2C63.2783 1198 54.3175 1198 47.4723 1194.51C41.4511 1191.44 36.5557 1186.55 33.4878 1180.53C30 1173.68 30 1164.72 30 1146.8V1133Z"
        stroke="black"
        strokeWidth="3"
      />
      <path
        d="M1623 1199V1198H1742V1199L1731 1210H1634L1623 1199Z"
        stroke="black"
        strokeWidth="3"
      />
      <path
        d="M130 1199V1198H249V1199L238 1210H141L130 1199Z"
        stroke="black"
        strokeWidth="3"
      />
      <foreignObject
        className="mockup-screen"
        style={{ position: "relative", pointerEvents: "all" }}
        x="214"
        y="63"
        width="1444"
        height="1028"
      >
        <div
          className="wrapper"
          style={{ borderRadius: "0px", overflow: "hidden" }}
        >
          <div className="scrollable-container-mockup">
            <img
              src="https://storage.googleapis.com/uxfolio/66e0c774b0349900027d9a16/66fb065305bd230002e9f912/faQYEgfXVPsfdPjR.png"
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
      <path
        d="M777 1133H1094V1133C1094 1145.15 1084.15 1155 1072 1155H799C786.85 1155 777 1145.15 777 1133V1133Z"
        stroke="black"
        strokeWidth="3"
      />
    </svg>
  );
}

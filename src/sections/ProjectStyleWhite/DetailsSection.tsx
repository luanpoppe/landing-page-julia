import { mainColors } from "../../utils/colors";
import { HorizontalProjectSection } from "../projects/HorizontalProjectSection";
import { PrototypeButton } from "../projects/PrototypeButton";
import { ReadMoreAndContact } from "../projects/ReadMoreAndContact";
import { ProjectImage } from "./ProjectImage";
import { ZoomImage1 } from "./ZoomImage1";
import { ZoomImage2 } from "./ZoomImage2";

export function DetailsSection() {
  return (
    <section className="d-flex justify-content-center projects-paddings">
      <div
        style={{
          backgroundColor: mainColors.white,
          maxWidth: "1188px",
        }}
      >
        <HorizontalProjectSection className="d-flex flex-column flex-lg-row gap-4 flex-wrap flex-lg-nowrap">
          <div className="col-12 col-lg-6">
            <h3 style={{ marginBottom: "20px" }}>Overview</h3>
            During a <strong>UX/UI specialization</strong> course at EBAC, an
            online creative British school, I worked on a project for over{" "}
            <strong>2 years</strong>. Throughout the course, I completed tasks
            at the end of each subject, which involved conducting{" "}
            <strong>quantitative and qualitative research</strong> with various
            users, creating <strong>prototypes</strong>, and carrying out
            <strong>marketing research</strong>.
          </div>
          <div className="col-12 col-lg-6">
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
        </HorizontalProjectSection>

        <HorizontalProjectSection className="d-flex flex-column flex-lg-row">
          <div className="col-12 col-lg-6">
            <h3 style={{ marginBottom: "20px" }}>Interviews</h3>
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
          <div className="col-12 col-lg-6 d-flex flex-column gap-4 gao-lg-2 align-items-center">
            <ProjectImage />
            <div>Customer persona to help building interview script</div>
          </div>
        </HorizontalProjectSection>

        <HorizontalProjectSection className="w-100 d-flex flex-column gap-4 align-items-center">
          <ZoomImage1 />
          <p>
            Mindmap to guide the first wireframes and draw low-fidelity
            prototypes
          </p>
        </HorizontalProjectSection>

        <HorizontalProjectSection className="d-flex flex-column align-items-center text-center">
          <div className="col-12 col-lg-6">
            <h3 style={{ marginBottom: "20px" }}>Wireframes </h3>
            <div className="mb-5">
              I used Figma to translate my initial sketches into low-fidelity
              wireframes, following the basic user journey within the app. I
              also used Figma to animate the user journey steps and documented
              all the screens to gain a better understanding of the process.
              Click below to see the animated prototype.
            </div>
            <PrototypeButton />
          </div>
        </HorizontalProjectSection>

        <HorizontalProjectSection className="w-100 d-flex flex-column gap-4 align-items-center">
          <ZoomImage2 />
          <p>Document of the journey process of the screens</p>
        </HorizontalProjectSection>

        <HorizontalProjectSection className="d-flex flex-column flex-lg-row gap-4 flex-wrap flex-lg-nowrap">
          <div className="col-12 col-lg-6">
            <h3 style={{ marginBottom: "20px" }}>Learnings</h3>
            <p>
              This was my first time using Figma, and it was much easier than I
              expected. Since I have experience with Adobe Suite programs, most
              of the tools were intuitive to use. I was able to improve my
              design techniques and learn new skills such as creating
              questionnaires, conducting interviews, and doing research.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <h3 style={{ marginBottom: "20px" }}>Next steps</h3>
            <p>
              Even though it was a course project, I was able to engage with the
              market and understand all the steps of a real process. If someday
              I have a team and resources, I would definitely continue working
              on it. I found the experience enriching so far.
            </p>
          </div>
        </HorizontalProjectSection>

        <ReadMoreAndContact
          linkUrl="/project/sanar"
          imageAlt="Project for Sanar"
          imageSrc="../home-picture-1.png"
          imageText="Rebranding for all Sanar's Landing Pages - Click to see more!"
        />
      </div>
    </section>
  );
}

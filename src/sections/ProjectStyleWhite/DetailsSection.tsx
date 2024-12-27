import { mainColors } from "../../utils/colors";
import { HorizontalProjectSection } from "../projects/HorizontalProjectSection";
import { ProjectImage } from "./ProjectImage";

export function DetailsSection() {
  return (
    <section className="d-flex justify-content-center projects-paddings">
      <div
        style={{
          backgroundColor: mainColors.white,
          maxWidth: "1188px",
        }}
      >
        <HorizontalProjectSection className="d-flex gap-4">
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
        </HorizontalProjectSection>

        <HorizontalProjectSection className="d-flex">
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
        </HorizontalProjectSection>
      </div>
    </section>
  );
}

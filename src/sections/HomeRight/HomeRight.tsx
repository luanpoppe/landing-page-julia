import { Link } from "react-router-dom";
import { mainColors } from "../../utils/colors";

export function HomeRight() {
  return (
    <section
      className="container m-0 mt-md-5 overflow-y-scroll overflow-x-hidden text-center"
      id="right-home"
    >
      <div className="row g-4 flex-column aling-items-center flex-xl-row">
        <Link className="hidden col-12 col-xl-6 h-100" to={"/project/sanar"}>
          <div style={{ color: mainColors.blackLetters }}>
            <ImageProject src="./home-picture-1.png" alt="Project Sanar" />

            <TitleAndSubtitle
              title="Rebranding for all Sanar's Landing Pages - Click to see more!"
              subtitle="2023"
            />
          </div>
        </Link>

        <Link
          className="hidden col-12 col-xl-6 h-100"
          to={"/project/shopping-center"}
        >
          <div style={{ color: mainColors.blackLetters }}>
            <ImageProject
              src="./home-picture-2.png"
              alt="Project navigation for shopping centers"
            />

            <TitleAndSubtitle
              title="Navigation app for shopping centers - Click to see more!"
              subtitle="2024"
            />
          </div>
        </Link>
      </div>
    </section>
  );
}

type ImageProjectProps = {
  src: string;
  alt: string;
};

function ImageProject({ alt, src }: ImageProjectProps) {
  return <img src={src} alt={alt} className="grow-on-hover" />;
}

type TitleAndSubtitleProps = {
  title: string;
  subtitle: string;
};

function TitleAndSubtitle({ subtitle, title }: TitleAndSubtitleProps) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <h4
        className="font-varela-round text-center"
        style={{ paddingTop: "22px", width: "80%" }}
      >
        {title}
      </h4>
      <div>{subtitle}</div>
    </div>
  );
}

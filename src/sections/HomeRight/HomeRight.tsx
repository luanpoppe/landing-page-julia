import { Link } from "react-router-dom";
import { mainColors } from "../../utils/colors";
import styled from "styled-components";

export function HomeRight() {
  return (
    <SectionStyled
      className="m-0 mb-5 my-md-5 text-center y-sm-scroll d-block overflow-x-hidden"
      id="right-home"
    >
      <div
        className="row g-4 aling-items-center flex-lg-row y-sm-scroll"
        id="right-home-div"
      >
        <OneProject
          src="./home-picture-1.png"
          alt="Project Sanar"
          title="Rebranding for all Sanar's Landing Pages - Click to see more!"
          subtitle="2023"
          href="/project/sanar"
        />

        <OneProject
          src="./home-picture-2.png"
          alt="Project navigation for shopping centers"
          title="Navigation app for shopping centers - Click to see more!"
          subtitle="2024"
          href="/project/shopping-center"
        />
      </div>
    </SectionStyled>
  );
}

const SectionStyled = styled.section`
  @media (min-width: 768px) {
    margin-left: 35% !important;
  }

  img {
    width: 90%;
    @media (min-width: 992px) {
    }
  }
`;

type OneProjectProps = ImageProjectProps &
  TitleAndSubtitleProps & { href: string };

function OneProject({ alt, src, subtitle, title, href }: OneProjectProps) {
  return (
    <Link className="hidden col-12 col-lg-6 h-100 overf" to={href}>
      <div style={{ color: mainColors.blackLetters }}>
        <ImageProject src={src} alt={alt} />

        <TitleAndSubtitle title={title} subtitle={subtitle} />
      </div>
    </Link>
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

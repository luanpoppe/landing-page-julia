import { Link } from "react-router-dom";
import { HorizontalProjectSection } from "./HorizontalProjectSection";
import { mainColors } from "../../utils/colors";
import styled from "styled-components";

const EmailSize = styled.h1`
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 20px;

  @media (max-width: 360px) {
    font-size: 18px;
  }
`;

type Props = {
  imageText: string;
  imageSrc: string;
  imageAlt: string;
  linkUrl: string;
};

export function ReadMoreAndContact({
  imageAlt,
  imageSrc,
  imageText,
  linkUrl,
}: Props) {
  return (
    <>
      <HorizontalProjectSection className="d-flex flex-column align-items-center">
        <h3 className="mb-5">Read more of my case studies</h3>
        <div style={{ maxWidth: "150px" }}>
          <Link
            to={linkUrl}
            onClick={() =>
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 500)
            }
          >
            <img
              style={{ maxWidth: "150px", maxHeight: "150px" }}
              src={imageSrc}
              alt={imageAlt}
            />
            <p style={{ marginTop: "30px", color: mainColors.blackLetters }}>
              {imageText}
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
    </>
  );
}

import styled from "styled-components";
import { ContactForm } from "../sections/ContactForm";
import HomeLeft from "../sections/HomeLeft/HomeLeft";
import { mainColors } from "../utils/colors";
import { useCustomLoadPage } from "../utils/custom-hooks";

export function Contact({ isEmailSent }: { isEmailSent: boolean }) {
  useCustomLoadPage();

  return (
    <div className="d-flex flex-column flex-md-row h-100" id="contact-page">
      <HomeLeft />

      <SectionStyled
        className="d-block d-lg-flex justify-content-center gap-5 text-center"
        id="right-home"
        style={{ padding: "2% 4%" }}
      >
        <div>
          <img
            style={{ objectFit: "cover" }}
            className="w-100 h-100 col-6 hidden"
            src="https://storage.googleapis.com/uxfolio/66e0c774b0349900027d9a16/66e0c7a7b0349900027e672c/5jdLnPo5lnRFHJtt.jpeg"
            alt="Personal picture"
          />
        </div>
        <div className="col-12 col-lg-6 text-start">
          <div
            className={`font-varela-round mt-3 mt-lg-0 hidden ${
              isEmailSent ? "d-none" : ""
            }`}
            style={{ marginBottom: "20px" }}
          >
            Get in touch!
          </div>
          <div
            style={{ marginBottom: "30px" }}
            className={`hidden ${isEmailSent ? "d-none" : ""}`}
          >
            Do you have a product idea, want to discuss a project, or need a
            designer? Drop me an email!
          </div>

          {isEmailSent && (
            <h3
              autoFocus
              id="message-sent"
              className="font-karla fs-5 mb-4 mt-3 p-3"
              style={{
                borderRadius: "8px",
                backgroundColor: mainColors.lightPurple,
              }}
            >
              <strong>
                Successfully received the email! Thanks for being in contact
              </strong>
            </h3>
          )}

          <ContactForm isEmailSent={isEmailSent} />
        </div>
      </SectionStyled>
    </div>
  );
}

const SectionStyled = styled.div`
  @media (min-width: 768px) {
    margin-left: 33% !important;
  }
`;

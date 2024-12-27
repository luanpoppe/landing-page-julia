import { useEffect } from "react";
import { ContactForm } from "../sections/ContactForm";
import HomeLeft from "../sections/HomeLeft/HomeLeft";
import { handleOverflow } from "../utils/handle-overflow";
import { useLocation } from "react-router-dom";

export function Contact() {
  const location = useLocation();
  window.removeEventListener("resize", () => handleOverflow(location.pathname));
  window.addEventListener("resize", () => handleOverflow(location.pathname));
  useEffect(() => handleOverflow(location.pathname), []);

  return (
    <div className="d-flex flex-column flex-md-row h-100" id="contact-page">
      <HomeLeft />

      <section
        className="d-block d-lg-flex justify-content-center gap-5 text-center"
        id="right-home"
        style={{ padding: "5% 5%" }}
      >
        <div>
          <img
            style={{ objectFit: "cover" }}
            className="w-100 h-100 col-6"
            src="https://storage.googleapis.com/uxfolio/66e0c774b0349900027d9a16/66e0c7a7b0349900027e672c/5jdLnPo5lnRFHJtt.jpeg"
            alt="Personal picture"
          />
        </div>
        <div className="col-12 col-lg-6 text-start h-100">
          <div
            className="font-varela-round mt-3 mt-lg-0"
            style={{ marginBottom: "20px" }}
          >
            Get in touch!
          </div>
          <div style={{ marginBottom: "30px" }}>
            Do you have a product idea, want to discuss a project, or need a
            designer? Drop me an email!
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

import HomeLeft from "../sections/HomeLeft";
import { mainColors } from "../utils/colors";

export function Contact() {
  return (
    <div className="d-flex h-100">
      <HomeLeft />

      <section
        className="d-flex justify-content-center gap-5 text-center"
        id="right-home"
        style={{ margin: "5% 10%" }}
      >
        <div>
          <img
            style={{ objectFit: "cover" }}
            className="w-100 h-100 col-6"
            src="https://storage.googleapis.com/uxfolio/66e0c774b0349900027d9a16/66e0c7a7b0349900027e672c/5jdLnPo5lnRFHJtt.jpeg"
            alt="Personal picture"
          />
        </div>
        <div className="col-6 text-start">
          <div className="font-varela-round" style={{ marginBottom: "20px" }}>
            Get in touch!
          </div>
          <div style={{ marginBottom: "30px" }}>
            Do you have a product idea, want to discuss a project, or need a
            designer? Drop me an email!
          </div>
          <form
            style={{ fontSize: "14px" }}
            className="d-flex justify-content-center flex-column"
          >
            <div
              className="d-flex flex-column"
              style={{ marginBottom: "20px" }}
            >
              <label className="mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                placeholder="Your email"
                type="email"
                style={{
                  padding: "14px 16px",
                  borderRadius: "1px",
                  border: `1px solid ${mainColors.whiteLetters}`,
                }}
              />
            </div>

            <div
              className="d-flex flex-column"
              style={{ marginBottom: "20px" }}
            >
              <label className="mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                placeholder="Your name"
                type="text"
                style={{
                  padding: "14px 16px",
                  borderRadius: "1px",
                  border: `1px solid ${mainColors.whiteLetters}`,
                }}
              />
            </div>

            <div
              className="d-flex flex-column"
              style={{ marginBottom: "10px" }}
            >
              <label className="mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message here..."
                style={{
                  resize: "none",
                  height: "260px",
                  padding: "14px 16px",
                  borderRadius: "1px",
                  border: `1px solid ${mainColors.whiteLetters}`,
                }}
              />
            </div>

            <div className="d-flex mt-5">
              <button
                className="col-6 font-karla"
                style={{
                  fontWeight: "600",
                  borderRadius: "1000px",
                  padding: "10px 32px",
                  backgroundColor: mainColors.grey,
                  border: "none",
                }}
              >
                Send email
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

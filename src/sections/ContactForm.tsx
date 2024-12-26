import { mainColors } from "../utils/colors";

export function ContactForm() {
  return (
    <form
      style={{ fontSize: "14px" }}
      className="d-flex justify-content-center flex-column"
    >
      <div className="d-flex flex-column" style={{ marginBottom: "20px" }}>
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

      <div className="d-flex flex-column" style={{ marginBottom: "20px" }}>
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

      <div className="d-flex flex-column" style={{ marginBottom: "10px" }}>
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
          className="col-6 font-karla mb-5"
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
  );
}

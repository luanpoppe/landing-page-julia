import { useEffect } from "react";
import { mainColors } from "../utils/colors";

export function ContactForm({ isEmailSent }: { isEmailSent: boolean }) {
  useEffect(() => {
    if (isEmailSent) {
      document.getElementById("message-sent")?.scrollIntoView();
    }
  }, []);

  function sendEmail() {
    const emailFrom = document.querySelector<HTMLInputElement>("#email")?.value;
    const name = document.querySelector<HTMLInputElement>("#name")?.value;
    const message = document.querySelector<HTMLInputElement>("#message")?.value;

    fetch("http://localhost:8005/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailFrom,
        name,
        message,
      }),
    }).then((res) => {
      res.json().then((res) => {
        console.log("res: ", res);
      });
    });
  }

  return (
    <form
      style={{ fontSize: "14px" }}
      className="d-flex justify-content-center flex-column hidden"
    >
      <div className="d-flex flex-column" style={{ marginBottom: "20px" }}>
        <label className="mb-2" htmlFor="email">
          Email
        </label>
        <input
          disabled={isEmailSent}
          required
          id="email"
          placeholder="Your email"
          type="email"
          name="email"
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
          required
          disabled={isEmailSent}
          id="name"
          placeholder="Your name"
          type="text"
          name="name"
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
          required
          disabled={isEmailSent}
          name="message"
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
          onClick={sendEmail}
          type="button"
          disabled={isEmailSent}
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

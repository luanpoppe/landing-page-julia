import { useState } from "react";
import { mainColors } from "../utils/colors";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { useNavigate } from "react-router-dom";
import { email } from "../utils/email";

export function ContactForm({ isEmailSent }: { isEmailSent: boolean }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    email.sendEmail(setIsLoading, navigate);
  }

  return (
    <form
      onSubmit={(e) => sendEmail(e)}
      id="form"
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
          maxLength={400}
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
          type="submit"
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
          {isLoading ? <LoadingSpinner /> : "Send email"}
        </button>
      </div>
    </form>
  );
}

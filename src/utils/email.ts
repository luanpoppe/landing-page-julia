import { NavigateFunction } from "react-router-dom";

export const email = {
  sendEmail(setIsLoading: SetState<boolean>, navigate: NavigateFunction) {
    const emailFrom = document.querySelector<HTMLInputElement>("#email")?.value;
    const name = document.querySelector<HTMLInputElement>("#name")?.value;
    const message = document.querySelector<HTMLInputElement>("#message")?.value;

    fetch(
      "https://email-server-julia-git-main-luanpoppes-projects.vercel.app/api/email.js",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailFrom,
          name,
          message,
        }),
      }
    ).then((res) => {
      res.json().then(() => {
        setIsLoading(false);
        document.querySelector<HTMLFormElement>("#form")?.reset();
        navigate("/contact/success");

        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 500);
      });
    });
  },
};

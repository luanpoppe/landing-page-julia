import { PropsWithChildren, useRef, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

type Props = PropsWithChildren & {
  tituloDoProjeto: string;
};

export function ScrollTopButton(props: Props) {
  const { tituloDoProjeto } = props;
  const [buttonShouldAppear, setButtonShouldAppear] = useState(false);

  document.title = tituloDoProjeto;

  const buttonScrollTop = useRef<HTMLDivElement>(null);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) setButtonShouldAppear(true);
    else setButtonShouldAppear(false);
  });

  function clickButtonScrollTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <div
      ref={buttonScrollTop}
      onClick={clickButtonScrollTop}
      className="transition d-flex justify-content-center align-items-center"
      style={{
        backgroundImage:
          "https://uxfol.io/dist/src/assets/images/icon-left..svg",
        backgroundColor: "rgba(53, 55, 56, 0.1)",
        width: "64px",
        height: "64px",
        borderRadius: "100%",
        position: "fixed",
        bottom: "5%",
        right: "2%",
        cursor: "pointer",
        opacity: buttonShouldAppear ? "1" : "0",
      }}
    >
      <FaArrowUpLong color="white" size={20} />
    </div>
  );
}

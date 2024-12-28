import { useRef } from "react";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";
import { handleClick } from "../../utils/handleZoomImage";

const ImageStyled = styled.img`
  will-change: transform;
  opacity: 1;
  transform: translate(0px, 0px);
  translate: none;
  rotate: none;
  scale: none;
  max-width: 100%;
`;

export function ZoomImage2() {
  const modalElement = useRef<HTMLDialogElement>(null);

  return (
    <>
      <div className="w-100">
        <ImageStyled
          id="imagem"
          loading="lazy"
          className="w-100"
          src="https://storage.googleapis.com/uxfolio/66e0c774b0349900027d9a16/66fb065305bd230002e9f912/lrwMxzW2Ly4x6oVK.jpg"
          alt="Project Image"
          onClick={() => handleClick(modalElement, "open")}
          style={{ cursor: "zoom-in" }}
        />
      </div>

      <dialog
        ref={modalElement}
        style={{
          border: "none",
          backgroundColor: "#f2f2f2",
          outline: "none",
          borderRadius: "8px",
        }}
      >
        <div className="d-flex w-100 h-100">
          <img
            style={{ width: "98%", cursor: "zoom-out", maxHeight: "100vh" }}
            src="https://storage.googleapis.com/uxfolio/66e0c774b0349900027d9a16/66fb065305bd230002e9f912/lrwMxzW2Ly4x6oVK.jpg"
            alt="Project Image"
            onClick={() => handleClick(modalElement, "close")}
          />
          <IoClose
            color="black"
            className="clickable"
            size={32}
            onClick={() => handleClick(modalElement, "close")}
            style={{
              zIndex: "20",
            }}
          />
        </div>
      </dialog>
    </>
  );
}

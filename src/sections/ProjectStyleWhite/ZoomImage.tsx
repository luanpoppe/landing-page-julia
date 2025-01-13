import { IoClose } from "react-icons/io5";
import styled from "styled-components";
import { Modal } from "react-bootstrap";

const ImageStyled = styled.img`
  will-change: transform;
  opacity: 1;
  transform: translate(0px, 0px);
  translate: none;
  rotate: none;
  scale: none;
  max-width: 100%;
`;

type Props = {
  imgSrc: string;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show?: boolean;
  posicaoFlex: "center" | "start";
  doesHaveScroll?: boolean;
};

export function ZoomImage({
  imgSrc,
  setShow,
  show,
  posicaoFlex,
  doesHaveScroll = false,
}: Props) {
  return (
    <>
      <div className="w-100">
        <ImageStyled
          id="imagem"
          loading="lazy"
          className="w-100"
          src={imgSrc}
          alt="Project Image"
          onClick={() => setShow(true)}
          style={{ cursor: "zoom-in" }}
        />
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogAs={() =>
          ModalImagem({ setShow, imgSrc, posicaoFlex, doesHaveScroll })
        }
        centered
        size="lg"
      />
    </>
  );
}

function ModalImagem({ setShow, imgSrc, posicaoFlex, doesHaveScroll }: Props) {
  return (
    <div
      className="py-4"
      onClick={() => setShow(false)}
      style={{
        border: "none",
        borderRadius: "4px",
        outline: "none",
        height: "100%",
        display: "flex",
        alignItems: `${posicaoFlex}`,
        justifyContent: "center",
        paddingLeft: `${doesHaveScroll ? "0px" : "11px"}`,
      }}
    >
      <div
        className="d-flex"
        style={{
          backgroundColor: "#f2f2f2",
          borderRadius: "4px",
          maxHeight: "100%",
        }}
      >
        <img
          style={{
            width: "98%",
            cursor: "zoom-out",
            objectFit: "contain",
            borderRadius: "4px",
          }}
          src={imgSrc}
          alt="Project Image"
        />
        <IoClose
          color="black"
          className="clickable"
          size={32}
          onClick={() => setShow(false)}
          style={{
            zIndex: "20",
          }}
        />
      </div>
    </div>
  );
}

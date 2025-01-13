import { useState } from "react";
import { ZoomImage } from "./ZoomImage";

export function ZoomImage1() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <ZoomImage
      imgSrc="https://storage.googleapis.com/uxfolio/66e0c774b0349900027d9a16/66fb065305bd230002e9f912/bJ1NgymjMOmVVFlA.png"
      setShow={setShow}
      show={show}
      posicaoFlex="center"
    />
  );
}

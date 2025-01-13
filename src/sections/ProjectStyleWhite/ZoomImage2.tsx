import { useState } from "react";
import { ZoomImage } from "./ZoomImage";

export function ZoomImage2() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <ZoomImage
      setShow={setShow}
      show={show}
      imgSrc="https://storage.googleapis.com/uxfolio/66e0c774b0349900027d9a16/66fb065305bd230002e9f912/lrwMxzW2Ly4x6oVK.jpg"
      posicaoFlex="center"
    />
  );
}

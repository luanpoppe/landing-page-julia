import styled from "styled-components";

const ImageStyled = styled.img`
  will-change: transform;
  opacity: 1;
  transform: translate(0px, 0px);
  translate: none;
  rotate: none;
  scale: none;
  max-width: 100%;
`;

export function ZoomImage1() {
  return (
    <div className="w-100">
      <ImageStyled
        id="imagem"
        loading="lazy"
        className="w-100"
        src="https://storage.googleapis.com/uxfolio/66e0c774b0349900027d9a16/66fb065305bd230002e9f912/bJ1NgymjMOmVVFlA.png"
        alt="Project Image"
      />
    </div>
  );
}

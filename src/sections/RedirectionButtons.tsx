import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import styled from "styled-components";
import { mainColors } from "../utils/colors";

const Botao = styled.a`
  text-decoration: none;
  opacity: 100%;
  border: 1px solid #ffffff24;
  &:hover {
    border-color: ${mainColors.grey};
  }
  border-radius: 50%;
  padding: 8px;
  min-width: 40px;
  min-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function RedirectionButtons() {
  return (
    <div
      className="d-flex justify-content-center"
      style={{ gap: "10px", marginBottom: "24px" }}
    >
      <Botao href="">
        <FaLinkedinIn />
      </Botao>
      <Botao href="">
        <FaWhatsapp />
      </Botao>
      <Botao href="">
        <FaInstagram />
      </Botao>
    </div>
  );
}

import { PropsWithChildren, useEffect } from "react";
import styled from "styled-components";
import { BlackSection } from "../sections/ProjectStyleBlack/BlackSection";
import { WhiteSection } from "../sections/ProjectStyleBlack/WhiteSection";
import { ScrollTopButton } from "../components/ScrollTopButton";
import { useLocation } from "react-router-dom";
import { handleOverflow } from "../utils/handle-overflow";

type Props = PropsWithChildren & {
  tituloDoProjeto: string;
};

const ProjectStyleBlackStyled = styled.main`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  min-width: 100vw;
`;

export function ProjectStyleBlack(props: Props) {
  const location = useLocation();

  window.removeEventListener("resize", () => handleOverflow(location.pathname));
  window.addEventListener("resize", () => handleOverflow(location.pathname));
  useEffect(() => handleOverflow(location.pathname), []);
  return (
    <ProjectStyleBlackStyled>
      <BlackSection />
      <WhiteSection />

      <ScrollTopButton tituloDoProjeto={props.tituloDoProjeto} />
    </ProjectStyleBlackStyled>
  );
}

import { PropsWithChildren, useEffect } from "react";
import { InitialSection } from "../sections/ProjectStyleWhite/InitialSection";
import { DetailsSection } from "../sections/ProjectStyleWhite/DetailsSection";
import styled from "styled-components";
import { ScrollTopButton } from "../components/ScrollTopButton";
import { handleOverflow } from "../utils/handle-overflow";
import { useLocation } from "react-router-dom";

type Props = PropsWithChildren & {
  tituloDoProjeto: string;
};

const ProjectStyleWhiteStyled = styled.main`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  min-width: 100vw;
`;

export function ProjectStyleWhite(props: Props) {
  const location = useLocation();

  window.removeEventListener("resize", () => handleOverflow(location.pathname));
  window.addEventListener("resize", () => handleOverflow(location.pathname));
  useEffect(() => handleOverflow(location.pathname), []);
  return (
    <ProjectStyleWhiteStyled>
      <InitialSection />
      <DetailsSection />

      <ScrollTopButton tituloDoProjeto={props.tituloDoProjeto} />
    </ProjectStyleWhiteStyled>
  );
}

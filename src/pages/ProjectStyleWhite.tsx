import { PropsWithChildren } from "react";
import { InitialSection } from "../sections/ProjectStyleWhite/InitialSection";
import { DetailsSection } from "../sections/ProjectStyleWhite/DetailsSection";
import styled from "styled-components";
import { ScrollTopButton } from "../components/ScrollTopButton";
import { useCustomLoadPage } from "../utils/custom-hooks";

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
  useCustomLoadPage();

  return (
    <ProjectStyleWhiteStyled>
      <InitialSection />
      <DetailsSection />

      <ScrollTopButton tituloDoProjeto={props.tituloDoProjeto} />
    </ProjectStyleWhiteStyled>
  );
}

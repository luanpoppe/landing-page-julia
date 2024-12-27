import { PropsWithChildren } from "react";
import styled from "styled-components";
import { BlackSection } from "../sections/ProjectStyleBlack/BlackSection";
import { WhiteSection } from "../sections/ProjectStyleBlack/WhiteSection";
import { ScrollTopButton } from "../components/ScrollTopButton";

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
  return (
    <ProjectStyleBlackStyled>
      <BlackSection />
      <WhiteSection />

      <ScrollTopButton tituloDoProjeto={props.tituloDoProjeto} />
    </ProjectStyleBlackStyled>
  );
}

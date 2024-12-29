import styled from "styled-components";
import { mainColors } from "../../utils/colors";
const Style = styled.a`
  background-color: ${mainColors.lightPurple};
  border-radius: 1000px;
  padding: 13px 44px;
  color: rgb(33, 35, 41) !important;
  min-height: 46px;
  min-width: 140px;
  height: 46px;
  width: 140px;
  font-size: 16px !important;
  transition: all 0.5s;

  &:hover {
    background-color: #d6d1ffa2;
    transition: all 0.5s;
  }
`;

export function PrototypeButton() {
  return (
    <Style
      href="https://www.figma.com/proto/bCkz5rYlXt2sA4PCOE9oIM/app-shopping?node-id=0-1&t=0vwmcF2ZCljPBPLg-1"
      target="_blank"
    >
      <strong>Prototype</strong>
    </Style>
  );
}

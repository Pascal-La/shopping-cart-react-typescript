import styled from "styled-components";
import { IconButton } from "@material-ui/core";

export const Wrapper = styled.div`
  @media (min-width: 769px) {
    margin: 5em 10em;
  }

  @media (min-width: 1025px) {
    margin: 5em 20em;
  }
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`;

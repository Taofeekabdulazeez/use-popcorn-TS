import { ReactNode } from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: auto 36rem auto;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
  padding-inline: 3rem;
`;

interface NavProps {
  children?: ReactNode;
}

function Nav({ children }: NavProps) {
  return <StyledNav>{children}</StyledNav>;
}

export default Nav;

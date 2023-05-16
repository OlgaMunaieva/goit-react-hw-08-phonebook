import { styled } from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  & a {
    text-decoration-line: none;
  }
  & .active {
    color: red;
  }
`;

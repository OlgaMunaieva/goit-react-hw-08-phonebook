import { NavLink } from 'react-router-dom';
import { colors } from 'settings/variables';
import { styled } from 'styled-components';

export const NavContainer = styled.div`
  & a {
    display: inline-block;
    text-decoration: none;
    padding: 12px;
    font-weight: 700;
    color: -webkit-link;
  }
  & .active {
    color: ${colors.success};
  }
`;

export const NavAuth = styled(NavLink)`
  position: relative;
  ::after {
    content: '';
    width: 100%;
    height: 2px;
    background-color: -webkit-link;
    transition: transform 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);
    display: block;
    position: absolute;
    bottom: 7px;
    left: 0;
    transform: scale(0);
  }
  .active::after {
    background-color: red;
  }
  :hover::after {
    transform: scale(1);
  }
  span {
    display: inline-block;
  }
`;

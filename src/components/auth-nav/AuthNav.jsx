import { NavAuth, NavContainer } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <NavContainer>
      <NavAuth to="/register">
        <span>Register</span>
      </NavAuth>
      <NavAuth to="/login">
        <span>Log In</span>
      </NavAuth>
    </NavContainer>
  );
};

import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Nav } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/phonebook">Phonebook</NavLink>}
    </Nav>
  );
};
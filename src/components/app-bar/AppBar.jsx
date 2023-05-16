import { useAuth } from 'hooks/useAuth';
import { Header } from './AppBar.styled';
import { Navigation } from 'components/novigation/Navigation';
import { UserMenu } from 'components/user-menu/UserMenu';
import { AuthNav } from 'components/auth-nav/AuthNav';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};

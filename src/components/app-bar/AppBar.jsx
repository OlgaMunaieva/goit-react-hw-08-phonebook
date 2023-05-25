import { useAuth } from 'hooks/useAuth';
import { Navigation } from 'components/novigation/Navigation';
import { UserMenu } from 'components/user-menu/UserMenu';
import { AuthNav } from 'components/auth-nav/AuthNav';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px',
        gap: '60px',
        borderBottom: '1px solid #2a363b',
      }}
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

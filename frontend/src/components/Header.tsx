import { AppBar, Toolbar, Link } from '@mui/material';

const Header = ({ title }: { title: string }) => {
  return (
    <AppBar sx={{ bgcolor: 'black' }}>
      <Toolbar>
        <Link href="/" underline="none" variant="h6" color="white" sx={{ flex: '1', textAlign: 'center' }}>
          {title}
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

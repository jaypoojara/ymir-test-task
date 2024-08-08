import { AppBar, Toolbar, Typography } from '@mui/material';

const SearchAppBar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          Store
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default SearchAppBar;

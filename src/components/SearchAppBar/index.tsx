import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import SearchBar from '../SearchBar';
import { Link } from 'react-router-dom';

const SearchAppBar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component={Link}
          sx={{ display: { xs: 'none', sm: 'block', textDecoration: 'none' } }}
          to={'/'}
          color={'white'}
        >
          Store
        </Typography>
        <Box minWidth={500}>
          <SearchBar />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default SearchAppBar;

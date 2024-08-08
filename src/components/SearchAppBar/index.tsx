import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import SearchField from '../SearchField';

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
          component="div"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          Store
        </Typography>
        <Box minWidth={'500px'}>
          <SearchField />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default SearchAppBar;

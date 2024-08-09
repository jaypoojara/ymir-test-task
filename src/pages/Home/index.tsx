import { Box } from '@mui/material';
import SearchAppBar from '../../components/SearchAppBar';
import FilterDrawer from './components/FilterDrawer';
import HomeContent from './components/HomeContent';

const HomePage = () => {
  return (
    <Box display={'flex'}>
      <SearchAppBar />
      <FilterDrawer />
      <HomeContent />
    </Box>
  );
};

export default HomePage;

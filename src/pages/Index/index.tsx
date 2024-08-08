import { Box } from '@mui/material';
import SearchAppBar from '../../components/SearchAppBar';
import FilterDrawer from './components/FilterDrawer';
import Content from './components/Content';

const IndexPage = () => {
  return (
    <Box display={'flex'}>
      <SearchAppBar />
      <FilterDrawer />
      <Content />
    </Box>
  );
};

export default IndexPage;

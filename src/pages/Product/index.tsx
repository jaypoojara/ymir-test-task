import { Box } from '@mui/material';
import SearchAppBar from '../../components/SearchAppBar';
import Content from './components/Content';
import useItem from './components/useItem';

const ProductPage = () => {
  const item = useItem();

  return (
    <Box display={'flex'}>
      <SearchAppBar />
      <Content item={item} />
    </Box>
  );
};

export default ProductPage;

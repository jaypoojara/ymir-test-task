import { Box } from '@mui/material';
import SearchAppBar from '../../components/SearchAppBar';
import ProductContent from './components/ProductContent';
import useItem from '../../hooks/useSlugItem';

const ProductPage = () => {
  const item = useItem();

  return (
    <Box display={'flex'}>
      <SearchAppBar />
      <ProductContent item={item} />
    </Box>
  );
};

export default ProductPage;

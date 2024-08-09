import { Box, Toolbar } from '@mui/material';
import ProductList from '../../../../components/ProductList';
import useFilteredItems from '../../../../hooks/useFilteredItems';

const Content = () => {
  const items = useFilteredItems();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <ProductList items={items} />
    </Box>
  );
};

export default Content;

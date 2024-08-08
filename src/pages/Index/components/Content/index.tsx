import { Box, Toolbar } from '@mui/material';
import ItemList from '../../../../components/ItemList';
import useFiltered from './useFiltered';

const Content = () => {
  const items = useFiltered();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <ItemList items={items} />
    </Box>
  );
};

export default Content;

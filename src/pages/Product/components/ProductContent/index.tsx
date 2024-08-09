import { Box, Toolbar } from '@mui/material';
import { Item } from '../../../../types/Item';
import Found from '../Found';
import NotFound from '../../../../components/NotFound';

type Props = {
  item: Item | null;
};

const Content = ({ item }: Props) => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      {item ? <Found item={item} /> : <NotFound />}
    </Box>
  );
};

export default Content;

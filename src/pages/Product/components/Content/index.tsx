import { Box, Toolbar } from '@mui/material';
import { Item } from '../../../../models/common/Item';
import NotFound from '../NotFound';
import Found from '../Found';

type Props = {
  item: Item | null;
}

const Content = ({ item }: Props) => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      {item ? <Found item={item} /> : <NotFound />}
    </Box>
  );
};

export default Content;

import { Box, List, Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { Item } from '../../../../models/common/Item';

const Content = () => {
  const items = useSelector((store: RootState) => store.data.items);

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <List>
        {items.map((item: Item) => {
          return <Typography>{item.title}</Typography>;
        })}
      </List>
    </Box>
  );
};

export default Content;

import { Box, List, Typography } from '@mui/material';
import { Item } from '../../models/common/Item';
import ListItem from '../ListItem';

interface Props {
  items: Item[];
  small?: boolean;
}

const ItemList = ({ items, small }: Props) => {
  if (items.length === 0) {
    return (
      <Box>
        <Typography>No Items</Typography>
      </Box>
    );
  }

  return (
    <List>
      {items.map((item: Item) => {
        return <ListItem small={small} item={item} key={item.id} />;
      })}
    </List>
  );
};

export default ItemList;

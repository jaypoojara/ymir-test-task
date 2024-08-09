import { Box, List, Typography } from '@mui/material';
import { Item } from '../../models/common/Item';
import ListItem from '../ListItem';
import { Link } from 'react-router-dom';

type Props = {
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
        return (
          <Link
            to={'/' + item.title.replaceAll(' ', '_').replaceAll('/', '___').toLowerCase()}
            style={{
              textDecoration: 'none',
            }}
            key={item.id}
          >
            <ListItem small={small} item={item} />
          </Link>
        );
      })}
    </List>
  );
};

export default ItemList;

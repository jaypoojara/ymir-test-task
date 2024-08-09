import { Box, List, Typography } from '@mui/material';
import { Item } from '../../types/Item';
import ListItem from '../ProductCard';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { buildItemSlug } from '../../utils/pathUtils';

type Props = {
  items: Item[];
  small?: boolean;
};

const ProductList = ({ items, small }: Props) => {
  const memoItems = useMemo(() => {
    return items;
  }, [items]);

  if (items.length === 0) {
    return (
      <Box>
        <Typography>No Items</Typography>
      </Box>
    );
  }

  return (
    <List>
      {memoItems.map((item: Item) => {
        const slug = buildItemSlug(item.title);

        return (
          <Link
            to={`/${slug}`}
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

export default ProductList;

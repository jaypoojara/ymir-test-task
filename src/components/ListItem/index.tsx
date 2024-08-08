import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from '@mui/material';
import { Item } from '../../models/common/Item';
import { Link } from 'react-router-dom';

interface Props {
  item: Item;
  small?: boolean;
}

const ListItem = ({ item, small }: Props) => {
  return (
    <Link
      to={'/' + item.title}
      style={{
        textDecoration: 'none',
      }}
    >
      <Card
        elevation={small ? 0 : 1}
        sx={{
          display: 'flex',
          my: small ? 1 : 2,
        }}
      >
        <CardMedia
          component={'img'}
          sx={{ width: small ? '100px' : '200px', aspectRatio: 1 }}
          image={item.image}
          title={item.title}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant={small ? 'body1' : 'h5'}>
              {item.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                WebkitLineClamp: small ? 1 : 2,
                display: '-webkit-box',
                '-webkit-box-orient': 'vertical',
              }}
            >
              {item.description}
            </Typography>
            <Chip
              label={
                <Typography variant="caption" textTransform={'capitalize'}>
                  {item.category}
                </Typography>
              }
              size={small ? 'small' : 'medium'}
            />
            <Typography variant={small ? 'body2' : 'h6'} mt={1}>
              ${item.price}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Link>
  );
};

export default ListItem;

import { Box, Chip, Typography } from '@mui/material';
import { Item } from '../../../../models/common/Item';
import { StarOutline } from '@mui/icons-material';

interface Props {
  item: Item;
}

const Found = ({ item }: Props) => {
  return (
    <Box display={'flex'} flexDirection={'column'}>
      <Typography variant="h5">
        {item.title}{' '}
        <Chip
          size="small"
          color="primary"
          icon={<StarOutline />}
          label={item.rating.rate}
        />
      </Typography>

      <img
        src={item.image}
        style={{
          maxHeight: '400px',
          width: '100%',
          objectFit: 'contain',
          marginTop: '20px',
        }}
        alt={item.title}
      />

      <Typography mt={2} variant="body1">
        {item.description}{' '}
      </Typography>

      <Typography mt={2} variant="h4">
        ${item.price}
      </Typography>
    </Box>
  );
};

export default Found;

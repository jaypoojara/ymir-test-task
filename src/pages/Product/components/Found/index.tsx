import { Box, Chip, Typography } from '@mui/material';
import { Item } from '../../../../models/common/Item';
import { People, Star, StarOutline } from '@mui/icons-material';
import Review from '../../../../components/Review';

interface Props {
  item: Item;
}

const Found = ({ item }: Props) => {
  return (
    <Box display={'flex'} flexDirection={'column'}>
      <Typography variant="h5" display={'flex'} gap={1} alignItems={'baseline'}>
        {item.title}{' '}
        <Chip
          size="small"
          color="primary"
          icon={<Star />}
          label={item.rating.rate}
        />
        <Chip
          size="small"
          color="primary"
          icon={<People />}
          label={`Ratings: ${item.rating.count}`}
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

      <Review itemId={item.id} />
    </Box>
  );
};

export default Found;

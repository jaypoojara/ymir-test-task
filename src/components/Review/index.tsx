import { Box, Typography } from '@mui/material';
import useItemReviews from '../../hooks/useItemReviews';
import NewReviewBox from '../NewReviewBox';
import ReviewList from '../ReviewList';

type Props = {
  itemId: number;
};

const Review = ({ itemId }: Props) => {
  const reviews = useItemReviews(itemId);

  return (
    <Box
      mt={4}
      display={'flex'}
      flexDirection={'column'}
      sx={{
        maxWidth: 600,
      }}
    >
      <Typography variant="h5">Reviews</Typography>

      <NewReviewBox itemId={itemId} />

      <ReviewList reviews={reviews} />
    </Box>
  );
};

export default Review;

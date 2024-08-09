import { List, Typography } from '@mui/material';
import { Review } from '../../models/common/Review';
import ReviewItem from '../ReviewItem';

type Props = {
  reviews: Review[];
}

const ReviewList = ({ reviews }: Props) => {
  if (reviews.length === 0) {
    return (
      <Typography mt={2} variant="h6" textAlign={'center'}>
        No Reviews Posted
      </Typography>
    );
  }

  return (
    <List
      sx={{
        mt: 2,
      }}
    >
      {reviews.map((review) => {
        return <ReviewItem key={review.uniqueId} review={review} />;
      })}
    </List>
  );
};

export default ReviewList;

import { Box, Typography } from '@mui/material';
import { Review } from '../../types/Review';
import { formatDate } from '../../utils/date';

type Props = {
  review: Review;
};

const Comment = ({ review }: Props) => {
  return (
    <Box
      sx={{
        borderRadius: 2,
        borderColor: (theme) => theme.palette.primary.main,
        borderWidth: 1,
        borderStyle: 'solid',
        mt: 1,
        p: 1,
      }}
      display={'flex'}
      flexDirection={'column'}
      gap={1}
      key={review.uniqueId}
    >
      <Typography variant="body2">
        Review By: {review.reviewBy} | Posted At: {formatDate(review.uniqueId)}
      </Typography>
      <Typography variant="body1">{review.text}</Typography>
    </Box>
  );
};

export default Comment;

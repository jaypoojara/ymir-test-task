import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useMemo } from 'react';
import { Review } from '../../models/common/Review';

const useReviews = (itemId: number) => {
  const allReviews = useSelector((store: RootState) => store.data.reviews);

  const reviews = useMemo<Review[]>(() => {
    const filtered = allReviews.filter((review) => review.productId === itemId);
    return filtered;
  }, [allReviews, itemId]);

  return reviews;
};

export default useReviews;

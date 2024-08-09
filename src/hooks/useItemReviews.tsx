import { useAppSelector } from '../redux/store';
import { useMemo } from 'react';
import { Review } from '../types/Review';

const useItemReviews = (itemId: number) => {
  const allReviews = useAppSelector((store) => store.data.reviews);

  const reviews = useMemo<Review[]>(() => {
    const filtered = allReviews.filter((review) => review.productId === itemId);
    return filtered;
  }, [allReviews, itemId]);

  return reviews;
};

export default useItemReviews;

import { useParams } from 'react-router-dom';
import { useAppSelector } from '../redux/store';
import { useMemo } from 'react';
import { buildItemSlug } from '../utils/pathUtils';

const useItem = () => {
  const allItems = useAppSelector((store) => store.data.items);
  const params = useParams();
  const slug = params.slug;

  const item = useMemo(() => {
    const foundItem = allItems.find((item) => {
      const itemSlug = buildItemSlug(item.title);
      return itemSlug === slug;
    });
    return foundItem ?? null;
  }, [allItems, slug]);
  return item;
};

export default useItem;

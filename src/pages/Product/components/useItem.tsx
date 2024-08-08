import { useParams } from 'react-router-dom';
import { RootState } from '../../../redux/store';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

const useItem = () => {
  const allItems = useSelector((store: RootState) => store.data.items);
  const params = useParams();
  const slug = params.slug;

  const item = useMemo(() => {
    const foundItem = allItems.find(
      (item) =>
        item.title.replaceAll(' ', '_').replaceAll('/', '___').toLowerCase() ===
        slug,
    );
    return foundItem ?? null;
  }, [allItems, slug]);
  return item;
};

export default useItem;

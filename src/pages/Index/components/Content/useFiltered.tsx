import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { useMemo } from 'react';
import { Item } from '../../../../models/common/Item';

const useFiltered = () => {
  const allItems = useSelector((store: RootState) => store.data.items);
  const filters = useSelector((store: RootState) => store.home);

  const data = useMemo<Item[]>(() => {
    let data: Item[] = [...allItems];

    if (filters.categories.length > 0) {
      const filtered = data.filter((item) =>
        filters.categories.includes(item.category),
      );
      data = [...filtered];
    }

    if (filters.minAmount !== null) {
      const minAmount = filters.minAmount;
      const filtered = data.filter((item) => item.price >= minAmount);
      data = [...filtered];
    }

    if (filters.maxAmount !== null) {
      const maxAmount = filters.maxAmount;
      const filtered = data.filter((item) => item.price <= maxAmount);
      data = [...filtered];
    }

    return data;
  }, [allItems, filters]);

  return data;
};

export default useFiltered;

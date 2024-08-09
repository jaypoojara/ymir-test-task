import { Box, Chip, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../redux/store';
import { updateCategoryFilter } from '../../../../redux/home/slice';
import { useMemo } from 'react';

const CategoryFilter = () => {
  const categories = useAppSelector((store) => store.data.categories);
  const filter = useAppSelector((store) => store.home.categories);

  const dispatch = useDispatch();

  const handleCategorySelected = (category: string) => () => {
    dispatch(updateCategoryFilter([...filter, category]));
  };

  const handleCategoryDelete = (category: string) => () => {
    const filtered = filter.filter((cat) => cat !== category);
    dispatch(updateCategoryFilter(filtered));
  };

  const categoryList = useMemo(() => {
    return categories.map((category: string) => {
      const selected = filter.includes(category);
      return (
        <Chip
          key={category}
          label={
            <Typography variant="caption" textTransform={'capitalize'}>
              {category}
            </Typography>
          }
          size="small"
          sx={{
            m: 0.5,
          }}
          color={selected ? 'primary' : 'default'}
          onDelete={selected ? handleCategoryDelete(category) : undefined}
          onClick={selected ? undefined : handleCategorySelected(category)}
        />
      );
    });
  }, [categories, filter]);

  return (
    <Box>
      <Typography>Category Filter</Typography>
      {categoryList}
    </Box>
  );
};

export default CategoryFilter;

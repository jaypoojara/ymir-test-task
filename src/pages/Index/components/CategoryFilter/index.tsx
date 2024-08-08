import { Box, Chip, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { updateCategoryFilter } from '../../../../redux/home/slice';

const CategoryFilter = () => {
  const categories = useSelector((store: RootState) => store.data.categories);
  const filter = useSelector((store: RootState) => store.home.categories);

  const dispatch = useDispatch();

  const handleCategorySelected = (category: string) => () => {
    dispatch(updateCategoryFilter([...filter, category]));
  };

  const handleCategoryDelete = (category: string) => () => {
    const filtered = filter.filter((cat) => cat !== category);
    dispatch(updateCategoryFilter(filtered));
  };

  return (
    <Box>
      <Typography>Category Filter</Typography>
      {categories.map((category: string) => {
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
      })}
    </Box>
  );
};

export default CategoryFilter;

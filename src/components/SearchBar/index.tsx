import { Autocomplete, createFilterOptions, TextField } from '@mui/material';
import { useAppSelector } from '../../redux/store';
import ListItem from '../ProductCard';
import { Item } from '../../types/Item';
import { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { buildItemSlug } from '../../utils/pathUtils';

const filterOptions = createFilterOptions<Item>({
  matchFrom: 'any',
  ignoreCase: true,
  trim: true,
  stringify: (item: Item) =>
    item.title + ' ' + item.description + ' ' + item.category,
});

const SearchBar = () => {
  const options = useAppSelector((store) => store.data.items);
  const navigate = useNavigate();

  const handleOnChange = (_: SyntheticEvent, value: Item | null) => {
    if (value) {
      const slug = buildItemSlug(value.title);
      navigate(`/${slug}`);
    }
  };

  return (
    <Autocomplete
      options={options}
      sx={{ maxWidth: 500 }}
      fullWidth
      onChange={handleOnChange}
      getOptionLabel={(option) => ''}
      filterOptions={filterOptions}
      renderOption={(props, option: Item) => {
        return (
          <li {...props} key={option.id}>
            <ListItem item={option} small={true} />
          </li>
        );
      }}
      popupIcon={null}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          maxRows={1}
          placeholder="Search Item"
          sx={{
            borderRadius: 1,
            overflow: 'hidden',
            '& .MuiInputBase-root': {
              padding: 1,
              border: 'none',
              backgroundColor: 'rgba(255,255,255,0.1)',
              '&:hover': {
                border: 'none',
              },
              '&::before': {
                border: 'none',
              },
              '&:hover:not(.Mui-disabled, .Mui-error):before': {
                border: 'none',
              },
              '& input': {
                color: 'white',
              },
              '& input::placeholder': {
                color: 'white',
              },
            },
          }}
        />
      )}
    />
  );
};

export default SearchBar;

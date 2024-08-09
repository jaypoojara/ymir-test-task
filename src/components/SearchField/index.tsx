import { Autocomplete, createFilterOptions, TextField } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import ListItem from '../ListItem';
import { Item } from '../../models/common/Item';
import { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const filterOptions = createFilterOptions<Item>({
  matchFrom: 'any',
  ignoreCase: true,
  trim: true,
  stringify: (item: Item) =>
    item.title + ' ' + item.description + ' ' + item.category,
});

const SearchField = () => {
  const options = useSelector((store: RootState) => store.data.items);
  const navigate = useNavigate();

  const handleOnChange = (_: SyntheticEvent, value: Item | null) => {
    if (value) {
      navigate(
        '/' +
          value.title.replaceAll(' ', '_').replaceAll('/', '___').toLowerCase(),
      );
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
            borderRadius: '5px',
            overflow: 'hidden',
            '& .MuiInputBase-root': {
              padding: '9px',
              border: 'none',
              backgroundColor: 'rgba(255,255,255,0.2)',
              '&:hover': {
                border: 'none',
              },
              '&::before': {
                border: 'none',
              },
              '&:hover:not(.Mui-disabled, .Mui-error):before': {
                border: 'none',
              },
            },
          }}
        />
      )}
    />
  );
};

export default SearchField;

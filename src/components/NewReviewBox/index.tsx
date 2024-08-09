import { Box, Button, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReview } from '../../redux/data/slice';

type Props = {
  itemId: number;
}

const NewReviewBox = ({ itemId }: Props) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setValue(value);
    setError('');
  };

  const handleOnSubmit = () => {
    if (value && value.trim().length > 0) {
      dispatch(
        addReview({
          productId: itemId,
          text: value,
          reviewBy: 'Unknown',
        }),
      );
      setValue('');
      setError('');
    } else {
      setError('Required');
    }
  };

  return (
    <Box display={'flex'} flexDirection={'column'} gap={1}>
      <TextField
        fullWidth
        value={value}
        onChange={handleChange}
        variant="outlined"
        label="Write a review"
        placeholder="Review Here"
        multiline
        maxRows={4}
        minRows={4}
        error={!!error}
        helperText={error}
      />
      <Button variant="contained" onClick={handleOnSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default NewReviewBox;

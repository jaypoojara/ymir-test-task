import { Box, Slider, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../redux/store';
import { updatePriceFilter } from '../../../../redux/home/slice';

const PriceRangeFilter = () => {
  const items = useAppSelector((store) => store.data.items);
  const { minAmount, maxAmount } = useAppSelector((store) => store.home);

  const dispatch = useDispatch();

  const maxValue = Math.ceil(
    items.map((item) => item.price).sort()[items.length - 1],
  );

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    let finalValue = [0, 0];

    if (activeThumb === 0) {
      finalValue = [
        Math.min(newValue[0], maxAmount ?? maxValue),
        maxValue ?? maxValue,
      ];
    } else {
      finalValue = [minAmount ?? 0, Math.max(newValue[1], minAmount ?? 0)];
    }

    dispatch(updatePriceFilter(finalValue));
  };

  return (
    <Box mt={2}>
      <Typography>Price Range</Typography>
      <Box mx={3}>
        <Slider
          min={0}
          max={maxValue}
          value={[minAmount ?? 0, maxAmount ?? maxValue]}
          disableSwap
          size="small"
          valueLabelDisplay="auto"
          onChange={handleChange}
          step={1}
          marks={[
            {
              value: 0,
              label: '$0',
            },
            {
              value: maxValue,
              label: `$${maxValue}`,
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default PriceRangeFilter;

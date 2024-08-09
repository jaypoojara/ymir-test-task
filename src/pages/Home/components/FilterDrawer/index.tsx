import { Box, Drawer, List, Toolbar } from '@mui/material';
import CategoryFilter from '../CategoryFilter';
import PriceRangeFilter from '../PriceRangeFilter';

const drawerWidth = 240;

const FilterDrawer = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List
          sx={{
            paddingX: 1,
          }}
        >
          <CategoryFilter />
          <PriceRangeFilter />
        </List>
      </Box>
    </Drawer>
  );
};

export default FilterDrawer;

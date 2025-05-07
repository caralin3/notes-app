import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import { IconButton } from '../IconButton';

interface DataTableToolbarProps {
  numSelected: number;
  showTitle?: boolean;
  title: string;
}

export function DataTableToolbar({
  numSelected,
  showTitle = true,
  title,
}: DataTableToolbarProps) {
  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
        numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity,
            ),
        },
      ]}>
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id={title}
          component="div">
          {showTitle && title}
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton icon={<DeleteIcon />} />
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton icon={<FilterListIcon />} />
        </Tooltip>
      )}
    </Toolbar>
  );
}

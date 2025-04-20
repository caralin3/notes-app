import { useMediaQuery } from '@mui/material';
import MuiIconButton from '@mui/material/IconButton';

import { IconButtonProps } from './IconButton.types';
import { Tooltip } from '../Tooltip';

export const IconButton = ({
  icon,
  selected,
  tooltip,
  tooltipPlacement,
  ...props
}: IconButtonProps) => {
  const isTablet = useMediaQuery('(max-width:900px)');
  const px = isTablet ? 0.5 : 1;
  const py = isTablet ? 0.25 : 0.5;

  if (tooltip) {
    return (
      <Tooltip title={tooltip} placement={tooltipPlacement}>
        <MuiIconButton
          {...props}
          sx={{
            ...(selected && {
              backgroundColor: (theme) => theme.palette.action.selected,
              color: (theme) => theme.palette.primary.main,
            }),
            borderRadius: 2,
            px,
            py,
          }}>
          {icon}
        </MuiIconButton>
      </Tooltip>
    );
  }
  return (
    <MuiIconButton
      {...props}
      sx={{
        ...(selected && {
          backgroundColor: (theme) => theme.palette.action.selected,
          color: (theme) => theme.palette.primary.main,
        }),
        borderRadius: 2,
        px,
        py,
      }}>
      {icon}
    </MuiIconButton>
  );
};

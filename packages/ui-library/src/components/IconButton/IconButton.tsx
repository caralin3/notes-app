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
            px: 1,
            py: 0.5,
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
        px: 1,
        py: 0.5,
      }}>
      {icon}
    </MuiIconButton>
  );
};

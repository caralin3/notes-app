import MuiIconButton from '@mui/material/IconButton';

import { IconButtonProps } from './IconButton.types';
import { Tooltip } from '../Tooltip';

export const IconButton = ({
  icon,
  tooltip,
  tooltipPlacement,
  ...props
}: IconButtonProps) => {
  if (tooltip) {
    return (
      <Tooltip title={tooltip} placement={tooltipPlacement}>
        <MuiIconButton {...props}>{icon}</MuiIconButton>
      </Tooltip>
    );
  }
  return <MuiIconButton {...props}>{icon}</MuiIconButton>;
};

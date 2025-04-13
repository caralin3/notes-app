import { IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton';
import { TooltipProps } from '@mui/material/Tooltip';

export interface IconButtonProps extends MuiIconButtonProps {
  icon: React.ReactNode;
  tooltip?: string;
  tooltipPlacement?: TooltipProps['placement'];
}

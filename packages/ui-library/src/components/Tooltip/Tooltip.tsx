import MuiTooltip, { tooltipClasses } from '@mui/material/Tooltip';

import { TooltipProps } from './Tooltip.types';

export const Tooltip = ({ children, ...props }: TooltipProps) => (
  <MuiTooltip
    {...props}
    arrow={false}
    slotProps={{
      popper: {
        sx: {
          [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
            {
              marginTop: 0.5,
            },
          [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
            {
              marginBottom: 0.5,
            },
          [`&.${tooltipClasses.popper}[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]:
            {
              marginLeft: '0px',
            },
          [`&.${tooltipClasses.popper}[data-popper-placement*="left"] .${tooltipClasses.tooltip}`]:
            {
              marginRight: '0px',
            },
        },
      },
    }}>
    {children}
  </MuiTooltip>
);

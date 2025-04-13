import MuiIconButton from '@mui/material/IconButton';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

import { IconButtonProps } from './IconButton.types';

export const IconButton = ({
  icon,
  tooltip,
  tooltipPlacement,
  ...props
}: IconButtonProps) => {
  if (tooltip) {
    return (
      <Tooltip
        title={tooltip}
        arrow={false}
        placement={tooltipPlacement}
        slotProps={{
          popper: {
            sx: {
              [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
                {
                  marginTop: '0px',
                },
              [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
                {
                  marginBottom: '0px',
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
        <MuiIconButton {...props}>{icon}</MuiIconButton>
      </Tooltip>
    );
  }
  return <MuiIconButton {...props}>{icon}</MuiIconButton>;
};

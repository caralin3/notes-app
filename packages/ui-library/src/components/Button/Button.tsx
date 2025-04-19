import { useMemo } from 'react';

import MuiButton from '@mui/material/Button';

import { ButtonProps } from './Button.types';
import { Tooltip } from '../Tooltip';

export const Button = ({
  label,
  children,
  selected,
  tooltip,
  tooltipPlacement,
  ...props
}: ButtonProps) => {
  const variant = useMemo(() => {
    if (!selected) {
      return props.variant;
    }
    if (props.variant === 'text' || props.variant === 'outlined') {
      return 'contained';
    }
    if (props.variant === 'contained') {
      return 'outlined';
    }
    return 'contained';
  }, [props.variant, selected]);

  if (tooltip) {
    return (
      <Tooltip title={tooltip} placement={tooltipPlacement}>
        <MuiButton {...props} variant={variant}>
          {label ?? children}
        </MuiButton>
      </Tooltip>
    );
  }

  return (
    <MuiButton {...props} variant={variant}>
      {label ?? children}
    </MuiButton>
  );
};

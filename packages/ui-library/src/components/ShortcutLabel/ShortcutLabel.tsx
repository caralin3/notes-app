import Typography from '@mui/material/Typography';

import { ShortcutLabelProps } from './ShortcutLabel.types';
import { convertToOSLabel } from '../../utils';

export const ShortcutLabel = ({ label, shortcut }: ShortcutLabelProps) => (
  <Typography
    sx={{
      alignItems: 'center',
      display: 'flex',
      flex: 1,
      justifyContent: 'space-between',
      gap: 2,
    }}>
    {label}
    <Typography variant="subtitle2" component="span" color="textDisabled">
      {convertToOSLabel(shortcut)}
    </Typography>
  </Typography>
);

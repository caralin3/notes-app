import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import './Button.css';
// import { ButtonProps } from "./Button.types";

const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  // return (
  //   <Button sx={{ backgroundColor: theme.palette.primary.main }}>Test</Button>
  // );
}));

export default StyledButton;

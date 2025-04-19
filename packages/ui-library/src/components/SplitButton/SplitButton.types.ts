export interface SplitButtonProps {
  options: string[];
  onClick: (option: string) => void;
  variant?: 'text' | 'outlined' | 'contained';
}

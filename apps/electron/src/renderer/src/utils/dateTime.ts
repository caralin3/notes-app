import { differenceInDays, format, formatDistanceToNow } from 'date-fns';

export const formatEditedAt = (date: string): string => {
  const editedDate = new Date(date);
  const dayDiff = differenceInDays(editedDate, new Date());
  if (dayDiff === 0) {
    return formatDistanceToNow(editedDate, {
      addSuffix: true,
      includeSeconds: true,
    });
  }
  return format(editedDate, 'MMM d, yyyy');
};

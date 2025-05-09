import { useState } from 'react';

import { DeleteDialog as DeleteDialogComponent } from '@notes-app/ui-library';

interface DeleteDialogProps {
  deleteItem: string;
  deleteType: string;
  onDelete: ({
    onSuccess,
    onError,
  }: {
    onSuccess: () => void;
    onError: (err: unknown) => void;
  }) => Promise<void>;
  open: boolean;
  redirect: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DeleteDialog = ({
  deleteItem,
  deleteType,
  onDelete,
  open,
  redirect,
  setOpen,
}: DeleteDialogProps) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  return (
    <DeleteDialogComponent
      title={`Delete ${deleteType}`}
      description={`Are you sure you want to delete the <strong>${deleteItem}</strong> note? This action cannot be undone.`}
      open={open}
      onClose={() => setOpen(false)}
      loading={loading}
      errorMessage={errorMessage}
      onSubmit={() => {
        setLoading(true);
        setErrorMessage(undefined);
        onDelete({
          onSuccess: () => {
            setLoading(false);
            setErrorMessage(undefined);
            setOpen(false);
            redirect();
          },
          onError: (error) => {
            setErrorMessage(error as string);
            setLoading(false);
          },
        });
      }}
    />
  );
};

import { useState } from 'react';

import { MoveNoteDialog } from '@notes-app/ui-library';

interface MoveDialogProps {
  folderId: string | null;
  folders: {
    label: string;
    value: string;
  }[];
  item: string;
  onMove: ({
    folderId,
    onSuccess,
    onError,
  }: {
    folderId: string | null;
    onSuccess: () => void;
    onError: (err: unknown) => void;
  }) => void;
  open: boolean;
  redirect: (folderId: string) => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MoveDialog = ({
  folderId,
  folders,
  item,
  onMove,
  open,
  redirect,
  setOpen,
}: MoveDialogProps) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  return (
    <MoveNoteDialog
      noteTitle={item}
      open={open}
      onClose={() => setOpen(false)}
      loading={loading}
      errorMessage={errorMessage}
      setErrorMessage={setErrorMessage}
      folderId={folderId}
      folders={folders}
      onSubmit={(folderId) => {
        setLoading(true);
        setErrorMessage(undefined);
        onMove({
          folderId,
          onSuccess: () => {
            setLoading(false);
            setErrorMessage(undefined);
            setOpen(false);
            if (folderId) {
              redirect(folderId);
            }
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

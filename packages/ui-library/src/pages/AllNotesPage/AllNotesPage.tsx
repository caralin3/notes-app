import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridOnIcon from '@mui/icons-material/GridOn';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { Stack, Typography } from '@mui/material';

import { AllNotesPageProps } from './AllNotesPage.types';
import { Button, IconButton } from '../../components';
import { NotePageContainer } from '../../components/Containers';
import { TableOfContents } from '../../compositions';

export function AllNotesPage<T>({
  isGridView = true,
  Link,
  listType,
  notes,
  onCreateFolder,
  onCreateNote,
  setIsGridView,
  ...props
}: AllNotesPageProps<T>) {
  if (!notes || notes.length === 0) {
    return (
      <NotePageContainer title="All Notes">
        <Stack alignItems="flex-start" spacing={2}>
          <Typography variant="body1">
            You haven&apos;t created any notes yet. Create a new note or a new
            folder to get started.
          </Typography>
          <Button
            label="Create Note"
            variant="contained"
            color="primary"
            onClick={onCreateNote}
            startIcon={<NoteAddIcon />}
          />
          <Button
            label="Create Folder"
            variant="contained"
            color="primary"
            onClick={onCreateFolder}
            startIcon={<CreateNewFolderIcon />}
          />
        </Stack>
      </NotePageContainer>
    );
  }

  return (
    <NotePageContainer
      title="All Notes"
      actions={
        <Stack direction="row" spacing={0.5} alignItems="center">
          {props.tableData && (
            <IconButton
              color="primary"
              onClick={() => setIsGridView(!isGridView)}
              icon={isGridView ? <FormatListBulletedIcon /> : <GridOnIcon />}
              tooltip={isGridView ? 'List View' : 'Grid View'}
            />
          )}
          <IconButton
            color="primary"
            onClick={onCreateNote}
            icon={<NoteAddIcon />}
            tooltip="Create Note"
          />
          <IconButton
            color="primary"
            onClick={onCreateFolder}
            icon={<CreateNewFolderIcon />}
            tooltip="Create Folder"
          />
        </Stack>
      }>
      <TableOfContents
        content={notes}
        Link={Link}
        listType={listType}
        viewType={isGridView ? 'grid' : 'list'}
        {...props}
      />
    </NotePageContainer>
  );
}

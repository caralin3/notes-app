import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridOnIcon from '@mui/icons-material/GridOn';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { Stack, Typography } from '@mui/material';

import { FolderPageProps } from './FolderPage.types';
import { Button, IconButton } from '../../components';
import { FolderPageContainer } from '../../components/Containers';
import { TableOfContents } from '../../compositions';

export function FolderPage<T>({
  isGridView = true,
  Link,
  listType,
  notes,
  onCreateNote,
  setIsGridView,
  ...props
}: FolderPageProps<T>) {
  if (!notes || notes.length === 0) {
    return (
      <FolderPageContainer {...props}>
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
        </Stack>
      </FolderPageContainer>
    );
  }

  return (
    <FolderPageContainer
      {...props}
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
          {!!props.actions && props.actions}
        </Stack>
      }>
      <TableOfContents
        content={notes}
        Link={Link}
        listType={listType}
        viewType={isGridView ? 'grid' : 'list'}
        {...props}
      />
    </FolderPageContainer>
  );
}

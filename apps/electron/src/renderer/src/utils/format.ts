import { Folder, Note } from '@notes-app/state-manager';

export const mapNotesToNestedList = (folders: Folder[], notes: Note[]) => {
  const folderNotes = folders.map((folder) => ({
    id: folder.id,
    title: folder.name,
    path: `/folder/${folder.id}`,
    children: notes
      .filter((note) => note.folderId === folder.id)
      .map((note) => ({
        id: note.id,
        title: note.title,
        path: `/folder/${folder.id}/${note.slug}`,
      })),
  }));

  const notesWithoutFolder = notes
    .filter((note) => !note.folderId)
    .map((note) => ({
      id: note.id,
      title: note.title,
      path: `/note/${note.slug}`,
    }));

  return [...folderNotes, ...notesWithoutFolder];
};

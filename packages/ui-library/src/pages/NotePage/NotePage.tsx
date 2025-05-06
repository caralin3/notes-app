import { NotesPageProps } from './NotePage.types';
import { NotePageContainer } from '../../components/Containers/NotePageContainer';
import { Tiptap } from '../../components/Tiptap';

export function NotePage(props: NotesPageProps) {
  return (
    // <NotePageContainer>
    <Tiptap {...props} />
    // </NotePageContainer>
  );
}

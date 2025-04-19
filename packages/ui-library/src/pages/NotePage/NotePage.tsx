import { NotesPageProps } from './NotePage.types';
import { Tiptap } from '../../components/Tiptap';
import { NotePageContainer } from '../../components/Containers/NotePageContainer';

export function NotePage({ content }: NotesPageProps) {
  return (
    <NotePageContainer>
      <Tiptap content={content} />
    </NotePageContainer>
  );
}

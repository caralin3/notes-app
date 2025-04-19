import { NotesPageProps } from './NotePage.types';
import { NotePageContainer } from '../../components/Containers/NotePageContainer';
import { Tiptap } from '../../components/Tiptap';

export function NotePage({ content }: NotesPageProps) {
  return (
    <NotePageContainer>
      <Tiptap content={content} />
    </NotePageContainer>
  );
}

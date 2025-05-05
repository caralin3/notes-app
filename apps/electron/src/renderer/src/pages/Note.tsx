import { useMemo } from 'react';

import { NotePage } from '@notes-app/ui-library';
import { useLocation } from 'react-router';

import { useNotes } from '../hooks';

export function Note() {
  const location = useLocation();
  const slug = location.pathname.split('/').pop();
  const { getNoteBySlug } = useNotes();

  const note = useMemo(() => {
    if (!slug) {
      return null;
    }
    const slugNote = getNoteBySlug(slug);
    if (!slugNote) {
      return null;
    }
    return slugNote;
  }, [slug, getNoteBySlug]);

  if (!note) {
    return null;
  }
  const { content } = note;

  return <NotePage content={content} />;
}
